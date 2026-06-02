"use client";

import { useState, useEffect } from "react";
import { X, Zap, BookOpen, TableProperties, GraduationCap } from "lucide-react";

export default function ScrollPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasClosed && window.scrollY > 800) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasClosed]);

  const close = () => {
    setIsVisible(false);
    setHasClosed(true);
  };

  const handleCTA = () => {
    close();
    window.location.href = "https://pay.kiwify.com.br/LarNUKO";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0B140B] w-full max-w-[400px] rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-white/5 p-1 rounded-full z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-6 text-center border-b border-white/5 pb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-widest mb-6 mt-2">
            <Zap className="w-3 h-3 fill-current" /> Oferta Relâmpago · Só Agora
          </div>

          <h2 className="text-2xl font-bold font-serif text-white mb-3 leading-tight">
            Compre agora e leve o{" "}
            <span className="text-[#2ceb64] italic">Kit Reinício de Carreira</span> Completo
          </h2>
          <p className="text-sm text-white/40 font-light">
            Exclusivo para quem decide nesta página — essa oferta não aparece em lugar nenhum.
          </p>
        </div>

        {/* Body */}
        <div className="p-4 bg-[#070c07]">
          {/* 3 Componentes do Kit */}
          <p className="text-[10px] uppercase tracking-widest text-white/25 text-center mb-3 font-bold">
            Você leva 3 coisas
          </p>

          <div className="space-y-3 mb-5">
            {/* Item 1 - Guia */}
            <div className="border border-white/5 bg-[#0e190e] rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2ceb64]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5 text-[#2ceb64]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white mb-1">O Guia das 50 Oportunidades</h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Curadoria com 50+ cursos gratuitos e certificados — Harvard, MIT, Google, SENAI, Bradesco e mais. Links diretos, organizados por área.
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold text-white/25 line-through">Valeria R$47 sozinho</span>
                </div>
              </div>
            </div>

            {/* Item 2 - Apostilas */}
            <div className="border border-white/5 bg-[#0e190e] rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white mb-1">As 4 Apostilas do Recomeço</h3>
                  <ul className="text-xs text-white/50 leading-relaxed space-y-0.5">
                    <li>· Organize sua Base — educação financeira na prática</li>
                    <li>· Escolha seu Caminho — autoconhecimento e áreas</li>
                    <li>· Do Certificado à Renda — monetização, freelas, LinkedIn</li>
                    <li>· Seu Plano de 90 Dias — roteiro semana a semana</li>
                  </ul>
                  <span className="inline-block mt-2 text-[10px] font-bold text-white/25 line-through">Valeria R$37 sozinho</span>
                </div>
              </div>
            </div>

            {/* Item 3 - Planilha */}
            <div className="border border-white/5 bg-[#0e190e] rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TableProperties className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white mb-1">A Planilha do Controle</h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Planilha financeira anual no Google Sheets e Excel — abas mensais, alertas de crédito, metas de reserva de emergência e gráficos automáticos.
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold text-white/25 line-through">Valeria R$19 sozinho</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefícios - Bullet Points */}
          <div className="bg-[#0e190e] border border-[#2ceb64]/10 rounded-2xl p-4 mb-4">
            <p className="text-[10px] uppercase tracking-widest text-[#2ceb64]/50 text-center mb-3 font-bold">
              O que você conquista com o kit
            </p>
            <ul className="text-xs text-white/70 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#2ceb64] mt-0.5 flex-shrink-0">✓</span>
                <span>Certificados reconhecidos por empresas do Brasil e do exterior</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2ceb64] mt-0.5 flex-shrink-0">✓</span>
                <span>Cursos de Harvard, MIT, Google, Meta, IBM, SENAI e Bradesco</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2ceb64] mt-0.5 flex-shrink-0">✓</span>
                <span>Trilhas em tecnologia, marketing digital, finanças e idiomas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2ceb64] mt-0.5 flex-shrink-0">✓</span>
                <span>Roteiro de 90 dias para organizar sua vida financeira e profissional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2ceb64] mt-0.5 flex-shrink-0">✓</span>
                <span>Planilha pronta para controle total das suas finanças o ano inteiro</span>
              </li>
            </ul>
          </div>

          {/* Valor total */}
          <div className="text-center py-3 mb-3">
            <p className="text-xs text-white/40 line-through mb-1">
              Valor dos 3 itens separados: R$103
            </p>
            <p className="text-2xl font-bold text-white font-serif">
              Tudo isso por{" "}
              <span className="text-[#2ceb64]">R$15,99</span>
            </p>
            <p className="text-[11px] text-white/35 mt-1">
              Menos de R$0,54 por dia no seu primeiro mês de transformação
            </p>
          </div>

          {/* Urgência */}
          <div className="bg-[#1c1313] border border-red-900/30 rounded-xl p-4 flex gap-3 items-center mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] flex-shrink-0 animate-pulse"></span>
            <p className="text-xs text-white/70">
              <span className="text-red-400 font-bold">Oferta exclusiva desta página.</span>{" "}
              Os 3 itens juntos por R$15,99 — você não encontra esse kit completo em outro lugar.
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={handleCTA}
            className="btn-primary w-full !flex items-center justify-center gap-2 mb-4 py-4"
          >
            <Zap className="w-4 h-4 fill-current" /> Quero Meu Kit Agora
          </button>

          <button
            onClick={close}
            className="w-full text-center text-xs text-white/30 hover:text-white/70 transition-colors uppercase tracking-widest pb-2"
          >
            Não quero, fechar
          </button>
        </div>
      </div>
    </div>
  );
}
