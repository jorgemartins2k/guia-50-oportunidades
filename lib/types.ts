export type UserPlano = "free" | "pro" | "agency"
export type ProjectStatus = "rascunho" | "aguardando_inicio" | "rodando" | "pausado" | "encerrado"
export type ProjectFase = "teste" | "pre_escala" | "escala"
export type CreativeType = "imagem" | "video"
export type CreativeStatus = "pendente" | "analisando" | "aprovado" | "reprovado" | "em_teste" | "pre_escala" | "campeao" | "pausado"
export type CampaignType = "ABO" | "CBO"
export type ZonaHoraria = "quente" | "morna" | "fria"

export interface User {
  id: string
  clerk_id: string
  email: string
  plano: UserPlano
  telegram_chat_id?: string
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  user_id: string
  nome: string
  descricao?: string
  link_pagina?: string
  ticket_medio?: number
  meta_roas: number
  nicho?: string
  publico_alvo?: string
  access_token?: string
  ad_account_id?: string
  pixel_id?: string
  status: ProjectStatus
  fase_atual: ProjectFase
  horario_inicio?: string
  horario_recomendado?: string
  justificativa_horario?: string
  gasto_total: number
  receita_total: number
  roas_atual: number
  created_at: string
  updated_at: string
}

export interface Creative {
  id: string
  project_id: string
  nome: string
  arquivo_url: string
  tipo: CreativeType
  status: CreativeStatus
  score_ia?: number
  analise_ia?: Record<string, unknown>
  fase_atual: ProjectFase
  meta_image_hash?: string
  meta_video_id?: string
  meta_creative_id?: string
  meta_approval_status?: string
  meta_rejection_reason?: string
  gasto: number
  receita: number
  roas: number
  ctr: number
  cpr: number
  frequencia: number
  impressoes: number
  cliques: number
  created_at: string
  updated_at: string
}

export interface Campaign {
  id: string
  project_id: string
  meta_campaign_id?: string
  nome: string
  fase: ProjectFase
  tipo: CampaignType
  status: string
  objetivo: string
  budget_total?: number
  created_at: string
  updated_at: string
}

export interface AdSet {
  id: string
  campaign_id: string
  creative_id?: string
  meta_adset_id?: string
  nome: string
  budget_atual: number
  fase: ProjectFase
  status: string
  roas_acumulado: number
  frequencia: number
  gasto_total: number
  receita_total: number
  is_clone: boolean
  parent_adset_id?: string
  created_at: string
  updated_at: string
}

export interface HourlyMetrics {
  id: string
  ad_set_id: string
  hora: string
  vendas: number
  receita: number
  gasto: number
  roas: number
  ctr: number
  cpm: number
  cpr: number
  cpc: number
  impressoes: number
  cliques: number
  frequencia: number
  zona?: ZonaHoraria
  created_at: string
}

export interface DecisionLog {
  id: string
  project_id: string
  ad_set_id?: string
  creative_id?: string
  acao: string
  motivo_ia?: string
  dados_entrada?: Record<string, unknown>
  resultado?: Record<string, unknown>
  executado: boolean
  timestamp: string
}

export interface AIInsight {
  id: string
  project_id: string
  tipo: "analise_criativo" | "decisao_escala" | "diagnostico" | "recomendacao" | "chat"
  conteudo: Record<string, unknown>
  modelo: string
  tokens_usados?: number
  timestamp: string
}

export interface HeatmapData {
  id: string
  project_id: string
  dia_semana: number
  hora: number
  total_vendas: number
  total_receita: number
  total_gasto: number
  roas_medio: number
  percentual_vendas: number
  zona?: ZonaHoraria
  updated_at: string
}
