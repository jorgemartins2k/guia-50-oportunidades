"use client"

import { useEffect, useState } from "react"

export default function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const DURATION = 20 * 60 // 20 minutes in seconds

  useEffect(() => {
    const startTimeKey = "urgencyTimer_startTime"
    let startTime = sessionStorage.getItem(startTimeKey)

    if (!startTime) {
      const now = Date.now().toString()
      sessionStorage.setItem(startTimeKey, now)
      startTime = now
    }

    const startTimestamp = parseInt(startTime, 10)

    const updateTimer = () => {
      const elapsed = Math.floor((Date.now() - startTimestamp) / 1000)
      const remaining = Math.max(0, DURATION - elapsed)
      setTimeLeft(remaining)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  if (timeLeft === null) return null

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

  return (
    <div className="sticky top-0 z-50 flex justify-center py-2.5 px-4">
      <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] leading-none bg-[#1c1313] border border-red-900/30 rounded-full px-4 py-2">
        <span>🔥</span>
        <span className="text-white/70">Oferta expira em</span>
        <span className="text-red-400 font-bold tabular-nums tracking-tight">{formattedTime}</span>
        <span className="text-red-900/40">·</span>
        <span className="text-white/70">Última semana de promoção</span>
      </div>
    </div>
  )
}
