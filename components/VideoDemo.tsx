"use client";

import { useRef, useEffect, useState } from "react";

export default function VideoDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Se o browser bloquear áudio, tenta com muted
            video.muted = true;
            video.play();
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-dark-green text-cream pb-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold mb-6 uppercase tracking-widest">
          Veja como funciona
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 serif">
          A Planilha do Controle na prática
        </h2>
        <p className="text-white/50 text-sm mb-10 max-w-md mx-auto">
          Dá uma olhada rápida em como a planilha organiza suas finanças o ano inteiro — é mais fácil do que parece.
        </p>

        <div className="mx-auto max-w-[300px] rounded-[2.5rem] border-[3px] border-white/15 bg-black shadow-2xl overflow-hidden aspect-[9/16]">
          <video
            ref={videoRef}
            src="/assets/videos/snaptik_7558625498448907576_v3.mp4"
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-xs text-white/25 mt-6">
          Vídeo demonstrativo — a planilha real vai no Google Sheets e Excel, pronta para uso.
        </p>
      </div>
    </section>
  );
}
