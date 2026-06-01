export interface CreativeAnalysis {
  score: number            // 0–10
  hook_score: number       // força do hook visual
  clarity_score: number    // clareza da mensagem
  cta_score: number        // call-to-action
  appeal_score: number     // apelo emocional/visual
  pontos_fortes: string[]
  pontos_fracos: string[]
  sugestoes: string[]
  headline_sugerida: string
  body_copy_sugerido: string
  previsao_ctr: string     // "baixo" | "médio" | "alto"
  previsao_cpm: string     // "baixo" | "médio" | "alto"
  adequado_para_escala: boolean
  justificativa: string
}

const ANALYSIS_PROMPT = `Você é um especialista em criativos de tráfego pago com foco em Meta Ads (Facebook/Instagram).

Analise este criativo publicitário e retorne APENAS um JSON válido com a seguinte estrutura, sem texto adicional:

{
  "score": <número de 0 a 10, sendo 10 perfeito>,
  "hook_score": <0 a 10>,
  "clarity_score": <0 a 10>,
  "cta_score": <0 a 10>,
  "appeal_score": <0 a 10>,
  "pontos_fortes": ["...", "..."],
  "pontos_fracos": ["...", "..."],
  "sugestoes": ["...", "...", "..."],
  "headline_sugerida": "...",
  "body_copy_sugerido": "...",
  "previsao_ctr": "baixo|médio|alto",
  "previsao_cpm": "baixo|médio|alto",
  "adequado_para_escala": true|false,
  "justificativa": "..."
}

Critérios de avaliação:
- HOOK: Os primeiros 3 segundos (ou primeiro elemento visual) prendem atenção?
- CLAREZA: A proposta de valor é imediatamente compreensível?
- CTA: Existe um call-to-action claro e persuasivo?
- APELO: O criativo gera emoção, curiosidade ou desejo?

Contexto do produto: {CONTEXT}

Responda APENAS com o JSON, sem markdown, sem explicações.`

export async function analyzeCreativeWithDeepSeek(
  imageUrl: string,
  projectContext: {
    nome: string
    nicho?: string
    descricao?: string
    publico_alvo?: string
    ticket_medio?: number
  }
): Promise<CreativeAnalysis> {
  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) throw new Error("DEEPSEEK_API_KEY não configurada")

  const context = [
    projectContext.nome,
    projectContext.nicho && `Nicho: ${projectContext.nicho}`,
    projectContext.descricao && `Produto: ${projectContext.descricao}`,
    projectContext.publico_alvo && `Público: ${projectContext.publico_alvo}`,
    projectContext.ticket_medio && `Ticket médio: R$ ${projectContext.ticket_medio}`,
  ].filter(Boolean).join(" | ")

  const prompt = ANALYSIS_PROMPT.replace("{CONTEXT}", context)

  const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: { url: imageUrl },
            },
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
      max_tokens: 1500,
      temperature: 0.3,
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`DeepSeek API error: ${err}`)
  }

  const data = await response.json()
  const content = data.choices?.[0]?.message?.content || "{}"

  // Limpar markdown se vier
  const cleanJson = content.replace(/```json\n?|\n?```/g, "").trim()
  const analysis: CreativeAnalysis = JSON.parse(cleanJson)

  return analysis
}

// Fallback: análise via Claude (Anthropic API) se DeepSeek falhar
export async function analyzeCreativeWithClaude(
  imageUrl: string,
  projectContext: {
    nome: string
    nicho?: string
    descricao?: string
    publico_alvo?: string
    ticket_medio?: number
  }
): Promise<CreativeAnalysis> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY não configurada")

  const context = [
    projectContext.nome,
    projectContext.nicho && `Nicho: ${projectContext.nicho}`,
    projectContext.descricao && `Produto: ${projectContext.descricao}`,
    projectContext.publico_alvo && `Público: ${projectContext.publico_alvo}`,
    projectContext.ticket_medio && `Ticket médio: R$ ${projectContext.ticket_medio}`,
  ].filter(Boolean).join(" | ")

  const prompt = ANALYSIS_PROMPT.replace("{CONTEXT}", context)

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1500,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: { type: "url", url: imageUrl },
            },
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`Anthropic API error: ${err}`)
  }

  const data = await response.json()
  const content = data.content?.[0]?.text || "{}"
  const cleanJson = content.replace(/```json\n?|\n?```/g, "").trim()
  return JSON.parse(cleanJson)
}
