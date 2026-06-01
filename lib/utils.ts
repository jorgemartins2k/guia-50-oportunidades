import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export function formatROAS(value: number): string {
  return `${value.toFixed(2)}x`
}

export function formatPercent(value: number): string {
  return `${(value * 100).toFixed(2)}%`
}

export function getStatusColor(status: string): string {
  const map: Record<string, string> = {
    rascunho: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    aguardando_inicio: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    rodando: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    pausado: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    encerrado: "text-gray-400 bg-gray-400/10 border-gray-400/20",
  }
  return map[status] || "text-gray-400 bg-gray-400/10 border-gray-400/20"
}

export function getStatusLabel(status: string): string {
  const map: Record<string, string> = {
    rascunho: "Rascunho",
    aguardando_inicio: "Aguardando Início",
    rodando: "Rodando",
    pausado: "Pausado",
    encerrado: "Encerrado",
  }
  return map[status] || status
}

export function getStatusEmoji(status: string): string {
  const map: Record<string, string> = {
    rascunho: "🟡",
    aguardando_inicio: "🔵",
    rodando: "🟢",
    pausado: "🟠",
    encerrado: "⚫",
  }
  return map[status] || "⚪"
}

export function getFaseLabel(fase: string): string {
  const map: Record<string, string> = {
    teste: "Fase 1 — Teste",
    pre_escala: "Fase 2 — Pré-escala",
    escala: "Fase 3 — Escala",
  }
  return map[fase] || fase
}

export function getFaseProgress(fase: string): number {
  const map: Record<string, number> = {
    teste: 33,
    pre_escala: 66,
    escala: 100,
  }
  return map[fase] || 0
}
