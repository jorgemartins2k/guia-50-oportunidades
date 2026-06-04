import StickyCTA from "@/components/StickyCTA";
import VideoDemo from "@/components/VideoDemo";
import Avatar from "@/components/Avatar";
import {
  Star,
  ShieldCheck,
  Zap,
  Smartphone,
  Lock,
  ChevronDown,
  GraduationCap,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <StickyCTA />

      {/* SECTION 1 - HERO */}
      <section className="bg-dark-green text-cream section-padding flex flex-col items-center px-4">
        <div className="max-w-4xl w-full text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            50 cursos de Harvard, MIT e Google{" "}
            <span className="text-gold italic">organizados pra você</span>
          </h1>
          <p className="text-lg md:text-xl font-medium serif text-gold mb-4">
            O conhecimento é gratuito. O mapa custa R$15,99.
          </p>

          <p className="text-sm md:text-base opacity-80 mb-10 max-w-lg mx-auto">
            O Guia das 50 Oportunidades por R$15,99 — acesso imediato.
            <br />
            <span className="text-gold font-medium">Bônus: Apostilas do Recomeço + Planilha do Controle.</span>
          </p>

          <ul className="text-left max-w-md mx-auto mb-10 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 flex-shrink-0">✅</span>
              <span className="text-sm opacity-90">
                50 cursos gratuitos com certificado — Harvard, MIT, Google e mais
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 flex-shrink-0">✅</span>
              <span className="text-sm opacity-90">
                Tudo organizado por área — sem perder horas no Google
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 flex-shrink-0">✅</span>
              <span className="text-sm opacity-90">
                Acesso imediato e vitalício por R$15,99
              </span>
            </li>
          </ul>

          <a
            href="https://pay.kiwify.com.br/LarNUKO"
            className="btn-primary w-full max-w-sm flex items-center justify-center gap-2"
          >
            👉 Quero acesso agora por R$15,99
          </a>

          <p className="text-xs font-medium opacity-60 flex items-center justify-center gap-2 mt-6">
            <ShieldCheck className="w-4 h-4" /> Pagamento Seguro · Acesso imediato · Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* SECTION 2 - INSTITUIÇÕES */}
      <section className="bg-cream text-dark-green section-padding px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 serif">
            Instituições de elite ao seu alcance
          </h2>
          <p className="text-sm opacity-60 mb-10 max-w-lg mx-auto">
            Os cursos do Guia vêm das instituições mais respeitadas do mundo. Conteúdo de ponta, certificado reconhecido.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              "Harvard",
              "MIT",
              "Google",
              "SENAI",
              "Bradesco",
              "IBM",
            ].map((inst) => (
              <div
                key={inst}
                className="bg-white border border-dark-green/10 rounded-2xl py-6 px-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-lg md:text-xl font-bold serif text-dark-green/80">
                  {inst}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - O QUE VOCÊ RECEBE */}
      <section className="bg-dark-green text-cream section-padding px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center serif">
            O que você recebe
          </h2>

          {/* Produto principal */}
          <div className="p-8 rounded-3xl bg-white/10 border-2 border-gold flex flex-col md:flex-row gap-8 items-center mb-6">
            <div className="w-24 h-24 bg-gold rounded-2xl flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-12 h-12 text-dark-green" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold serif mb-2">
                O Guia das 50 Oportunidades
              </h3>
              <p className="opacity-70 leading-relaxed">
                A curadoria completa das melhores instituições do mundo em um
                único guia digital interativo.
              </p>
            </div>
          </div>

          {/* Bônus em uma linha */}
          <p className="text-center text-gold font-medium text-lg serif">
            + 4 Apostilas do Recomeço + Planilha do Controle
          </p>
        </div>
      </section>

      {/* SECTION 4 - VÍDEO DA PLANILHA */}
      <VideoDemo />

      {/* SECTION 5 - DEPOIMENTOS */}
      <section className="bg-cream text-dark-green section-padding px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center serif text-gold">
            Histórias de quem já começou
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Paula",
                city: "Curitiba - PR",
                text: "Eu estava perdida no desemprego. O guia me mostrou o curso de marketing do Sebrae e já atualizei meu currículo. Sensacional!",
                stars: 5,
              },
              {
                name: "Marcos Silva",
                city: "São Paulo - SP",
                text: "A planilha de controle mudou minha vida antes mesmo dos cursos. Pela primeira vez estou saindo do vermelho.",
                stars: 5,
              },
              {
                name: "Fernanda Lima",
                city: "Salvador - BA",
                text: "Fiz o curso de Harvard. É gratuito o conteúdo, o certificado eu paguei depois só pra ostentar rs. Vale cada centavo o guia!",
                stars: 5,
              },
              {
                name: "Roberto Souza",
                city: "Goiânia - GO",
                text: "Muito prático. O plano de 90 dias me ajudou a não desistir e a criar uma rotina de estudos pelo celular.",
                stars: 5,
              },
              {
                name: "Juliana Costa",
                city: "Rio de Janeiro - RJ",
                text: "Consegui meu primeiro freela de design depois de seguir os cursos do guia. O investimento de 29 reais já se pagou 10x.",
                stars: 5,
              },
              {
                name: "Diego Oliveira",
                city: "Porto Alegre - RS",
                text: "O suporte é ótimo e a garantia me deu segurança. Mas nem pensei em devolver, o conteúdo é de altíssima qualidade.",
                stars: 5,
              },
            ].map((dep, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-sm border border-dark-green/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(dep.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-gold" />
                    ))}
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed italic mb-6">
                    &quot;{dep.text}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar name={dep.name} />
                  <div>
                    <p className="font-bold text-sm">{dep.name}</p>
                    <p className="text-xs opacity-50">{dep.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - PREÇO + GARANTIA */}
      <section
        id="checkout"
        className="bg-cream text-dark-green section-padding px-4"
      >
        <div className="max-w-3xl mx-auto text-center border-2 border-dark-green/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden bg-white/50 backdrop-blur-sm shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 serif">
            Tudo isso por quanto?
          </h2>

          <div className="space-y-4 mb-10 text-left max-w-md mx-auto">
            <div className="flex justify-between items-center opacity-70">
              <span>O Guia das 50 Oportunidades</span>
              <span className="font-bold">Incluído</span>
            </div>
            <div className="flex justify-between items-center opacity-70">
              <span>Bônus: 4 Apostilas de Recomeço</span>
              <span className="font-bold">Grátis</span>
            </div>
            <div className="flex justify-between items-center text-gold">
              <span>A Planilha do Controle</span>
              <span className="font-bold">Incluído</span>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-2xl">
              <span className="line-through opacity-40">De R$37,00</span>{" "}
              <span className="font-bold">por R$15,99</span>
            </p>
            <p className="text-6xl md:text-7xl font-bold text-dark-green serif italic mt-2">
              R$ 15,99
            </p>
            <p className="text-sm opacity-60 mt-4 uppercase tracking-widest font-bold">
              Pagamento único · Acesso Vitalício
            </p>
          </div>

          <div className="bg-gold/5 p-6 rounded-2xl border border-gold/20 mb-8 inline-block">
            <p className="text-sm font-bold flex items-center justify-center gap-2 text-gold">
              <Zap className="w-4 h-4 fill-current" /> OFERTA: No checkout
              adicione a Planilha Automática por apenas + R$ 9,90
            </p>
          </div>

          {/* Garantia inline */}
          <div className="bg-green-50 p-6 rounded-2xl border border-green-200 mb-8 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" />
              <h3 className="font-bold text-dark-green text-lg serif">
                Garantia de 7 dias sem burocracia
              </h3>
            </div>
            <p className="text-sm text-dark-green/70 leading-relaxed">
              O risco é todo meu. Se você não gostar do conteúdo, achar que não
              é para você ou simplesmente mudar de ideia, me manda uma mensagem
              em até 7 dias e eu devolvo 100% do seu valor.{" "}
              <strong>Sem perguntas, sem enrolação.</strong>
            </p>
            <p className="text-gold font-bold italic serif mt-3 text-sm">
              Seu sucesso ou seu dinheiro de volta.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="https://pay.kiwify.com.br/LarNUKO"
              className="btn-primary w-full max-w-sm text-xl md:py-6 rounded-2xl"
            >
              Garantir Meu Kit Agora
            </a>
            <div className="flex flex-wrap justify-center gap-4 opacity-50 grayscale pt-4">
              <Smartphone className="w-6 h-6" />
              <Lock className="w-6 h-6" />
              <ShieldCheck className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-tighter self-center">
                Hotmart Secure
              </span>
            </div>
            <p className="text-xs opacity-50">
              Pix · Cartão · Boleto · Garantia 7 Dias · Acesso Imediato
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 - FAQ */}
      <section className="bg-cream text-dark-green section-padding px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center serif text-gold">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Os cursos do guia são mesmo gratuitos?",
                a: "Sim! Todos os sites indicados oferecem o conteúdo de forma totalmente livre. Algumas instituições internacionais oferecem o certificado de forma paga opcional, mas o aprendizado é grátis.",
              },
              {
                q: "Preciso ler as apostilas antes?",
                a: "Recomendamos seguir a ordem (Apostila 1, 2, 3...) para que você tenha a mentalidade e o bolso preparados, mas você pode pular direto para o Guia das 50 Oportunidades se quiser.",
              },
              {
                q: "Como vou receber o material?",
                a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail da Kiwify com o link de acesso exclusivo para baixar todo o kit.",
              },
              {
                q: "O material funciona no celular?",
                a: "Sim! Foi desenhado especificamente para quem usa o celular como principal ferramenta. O material é responsivo e fácil de ler em qualquer tela.",
              },
              {
                q: "Os certificados têm valor no mercado?",
                a: "Com certeza. São instituições renomadas mundialmente. Um certificado da FGV, Sebrae ou Google abre muitas portas.",
              },
              {
                q: "E se eu tiver dúvidas?",
                a: "Dentro do material há nossos contatos de suporte. Estamos aqui para ajudar você na sua jornada.",
              },
              {
                q: "Quais as formas de pagamento?",
                a: "Aceitamos Pix (com liberação imediata), Cartão de Crédito (até 3x) e Boleto Bancário.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-dark-green/5 p-6 cursor-pointer"
              >
                <summary className="flex justify-between items-center font-bold text-lg list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 opacity-40 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 opacity-70 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark-green text-cream/40 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-cream text-2xl font-bold serif mb-4">
            O Guia das 50 Oportunidades
          </h3>
          <p className="text-xs max-w-xl mx-auto mb-10 leading-relaxed">
            Material educativo digital. Os resultados podem variar conforme o
            esforço, dedicação e perfil de cada pessoa. Não garantimos renda
            fixa ou resultados sem aplicação prática.
          </p>

          <div className="flex justify-center gap-8 text-xs font-bold uppercase tracking-widest mb-16">
            <a href="#" className="hover:text-cream transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Termos de Uso
            </a>
          </div>

          <div className="pt-10 border-t border-white/5">
            <p className="text-2xl md:text-3xl serif text-cream font-bold italic animate-pulse-dot">
              &quot;O conhecimento sempre foi de graça. O mapa é que custava caro.&quot;
            </p>
            <p className="mt-6 text-[10px]">
              © 2026 · Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
