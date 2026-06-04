"use client";

import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-dark-green/95 backdrop-blur-sm border-b border-white/10 animate-fade-in">
      <div className="max-w-4xl mx-auto flex items-center justify-center px-4 h-[50px]">
        <a
          href="https://pay.kiwify.com.br/LarNUKO"
          className="btn-primary text-xs py-1.5 px-4 rounded-lg"
        >
          Quero o Guia — R$15,99
        </a>
      </div>
    </div>
  );
}
