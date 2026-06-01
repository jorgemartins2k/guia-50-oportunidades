const META_API_VERSION = "v21.0"
const META_BASE = `https://graph.facebook.com/${META_API_VERSION}`

export interface MetaValidationResult {
  valid: boolean
  account_id?: string
  account_name?: string
  currency?: string
  timezone?: string
  spend_cap?: number
  balance?: number
  pixel_id?: string
  pixel_name?: string
  error?: string
  error_code?: number
}

export async function validateMetaCredentials(
  accessToken: string,
  adAccountId: string,
  pixelId?: string
): Promise<MetaValidationResult> {
  try {
    // Normalizar account ID
    const accountId = adAccountId.startsWith("act_") ? adAccountId : `act_${adAccountId}`

    // Verificar conta de anúncios
    const accountRes = await fetch(
      `${META_BASE}/${accountId}?fields=id,name,currency,timezone_name,spend_cap,balance,account_status&access_token=${accessToken}`,
      { next: { revalidate: 0 } }
    )
    const accountData = await accountRes.json()

    if (accountData.error) {
      return {
        valid: false,
        error: accountData.error.message,
        error_code: accountData.error.code,
      }
    }

    // Conta inativa?
    if (accountData.account_status !== 1) {
      const statusMap: Record<number, string> = {
        2: "Desativada",
        3: "Sem pagamento",
        7: "Pendente aprovação",
        9: "Em revisão",
        100: "Suspensa",
        101: "Fechada",
      }
      return {
        valid: false,
        error: `Conta ${statusMap[accountData.account_status] || `com status ${accountData.account_status}`}`,
      }
    }

    const result: MetaValidationResult = {
      valid: true,
      account_id: accountData.id,
      account_name: accountData.name,
      currency: accountData.currency,
      timezone: accountData.timezone_name,
      spend_cap: accountData.spend_cap,
      balance: accountData.balance,
    }

    // Verificar Pixel se fornecido
    if (pixelId) {
      const pixelRes = await fetch(
        `${META_BASE}/${pixelId}?fields=id,name,code&access_token=${accessToken}`,
        { next: { revalidate: 0 } }
      )
      const pixelData = await pixelRes.json()

      if (pixelData.error) {
        return {
          ...result,
          valid: false,
          error: `Pixel inválido: ${pixelData.error.message}`,
        }
      }

      result.pixel_id = pixelData.id
      result.pixel_name = pixelData.name
    }

    return result
  } catch (error) {
    return {
      valid: false,
      error: `Erro de conexão: ${error instanceof Error ? error.message : "Desconhecido"}`,
    }
  }
}

export async function getAdAccountInsights(
  accessToken: string,
  adAccountId: string,
  datePreset: string = "today"
) {
  const accountId = adAccountId.startsWith("act_") ? adAccountId : `act_${adAccountId}`
  const res = await fetch(
    `${META_BASE}/${accountId}/insights?fields=spend,revenue,roas,ctr,cpm,cpc,impressions,clicks,actions&date_preset=${datePreset}&access_token=${accessToken}`,
    { next: { revalidate: 300 } }
  )
  return res.json()
}

export async function uploadImageToMeta(
  accessToken: string,
  adAccountId: string,
  imageBuffer: Buffer,
  filename: string
) {
  const accountId = adAccountId.startsWith("act_") ? adAccountId : `act_${adAccountId}`
  const formData = new FormData()
  const blob = new Blob([new Uint8Array(imageBuffer)], { type: "image/jpeg" })
  formData.append("filename", blob, filename)
  formData.append("access_token", accessToken)

  const res = await fetch(`${META_BASE}/${accountId}/adimages`, {
    method: "POST",
    body: formData,
  })
  return res.json()
}
