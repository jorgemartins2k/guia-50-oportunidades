import UrgencyBar from "@/components/UrgencyBar";
import ScrollPopup from "@/components/ScrollPopup";
import VideoDemo from "@/components/VideoDemo";
import Avatar from "@/components/Avatar";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Star,
  ShieldCheck,
  Zap,
  Smartphone,
  Lock,
  ChevronDown,
  BookOpen,
  GraduationCap,
  Target,
  Layout,
  TrendingUp,
  Globe,
  Award,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <UrgencyBar />
      <ScrollPopup />
      {/* SECTION 1 - HERO */}
      <section className="bg-dark-green text-cream section-padding flex flex-col items-center px-4">
        <div className="max-w-4xl w-full text-center animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold mb-6 uppercase tracking-widest">
            Atualizado 2026 · 100% Gratuito · Com Certificado
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            O Mapa dos Cursos que as Empresas Querem Mas{" "}
            <span className="text-gold italic">Ninguém Te Mostra</span>
          </h1>

          <div className="border border-white/10 bg-white/5 rounded-[2rem] p-6 mb-10 text-center max-w-sm mx-auto shadow-xl">
            <p className="text-sm md:text-base opacity-90 font-light leading-relaxed mb-6">
              Domine as habilidades mais lucrativas do mercado com cursos de elite
              da <strong className="text-gold">Harvard, MIT, Google e Sebrae</strong>
              . Tudo organizado para você não perder tempo.
            </p>
            
            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 text-sm mb-6 items-center justify-between">
              <span className="opacity-80">Cursos de <span className="font-bold text-green-400">Harvard · MIT · Google · SENAI</span></span>
              <span className="opacity-60 text-xs text-right">— tudo gratuito</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a
                href="https://pay.kiwify.com.br/LarNUKO"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                👉 Quero acesso agora por R$15,99
              </a>
            </div>
          </div>
          
          <p className="text-xs font-medium opacity-60 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Pagamento Seguro · Acesso imediato · Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* SECTION 2 - DOR */}
      <section className="bg-cream text-dark-green section-padding px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Cansado de sentir que está ficando para trás?
          </h2>

          <div className="space-y-6 text-left max-w-xl mx-auto mb-10">
            <p className="border-l-2 border-dark-green/20 pl-6 italic text-lg md:text-xl">
              "Eu sei como é ver o mês acabar e o dinheiro não dar para nada."
            </p>
            <p className="border-l-2 border-dark-green/20 pl-6 italic text-lg md:text-xl">
              "Dói querer dar uma vida melhor para a minha família e não saber
              por onde começar."
            </p>
            <p className="border-l-2 border-dark-green/20 pl-6 italic text-lg md:text-xl">
              "Parece que as boas oportunidades só aparecem para quem já tem
              dinheiro para pagar cursos caros."
            </p>
            <p className="border-l-2 border-dark-green/20 pl-6 italic text-lg md:text-xl">
              "Fico perdido com tanta informação bagunçada no Google."
            </p>
          </div>

          <div className="pt-8 border-t border-dark-green/10">
            <p className="text-xl md:text-2xl font-medium serif text-gold">
              Você não precisa de mais tempo ou dinheiro. Você só precisa do
              mapa certo.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - O PRODUTO */}
      <section className="bg-dark-green text-cream section-padding px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 serif">
              O Guia das 50 Oportunidades
            </h2>
            <p className="text-lg opacity-80 italic">
              O atalho definitivo para sua qualificação profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Smartphone className="text-gold" />,
                title: "Tecnologia",
                desc: "Programação e TI do zero ao avançado.",
              },
              {
                icon: <TrendingUp className="text-gold" />,
                title: "Marketing",
                desc: "Vendas, anúncios e redes sociais.",
              },
              {
                icon: <Target className="text-gold" />,
                title: "Finanças",
                desc: "Gestão de dinheiro e investimentos básicos.",
              },
              {
                icon: <Globe className="text-gold" />,
                title: "Idiomas",
                desc: "Inglês e Espanhol focado no mercado.",
              },
              {
                icon: <Award className="text-gold" />,
                title: "Saúde",
                desc: "Primeiros socorros e bem-estar ocupacional.",
              },
              {
                icon: <Layout className="text-gold" />,
                title: "Gestão",
                desc: "Liderança e processos administrativos.",
              },
              {
                icon: <BookOpen className="text-gold" />,
                title: "Criatividade",
                desc: "Design, fotografia e edição de vídeo.",
              },
            ].map((niche, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex-shrink-0">{niche.icon}</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">{niche.title}</h4>
                  <p className="opacity-70 text-sm leading-relaxed">
                    {niche.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-gold/10 border border-gold/20 text-center">
            <p className="text-xl serif italic">
              "Mais de 50 cursos, 9 instituições de elite, tudo organizado —
              esqueça as horas perdidas no Google."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 - O MÉTODO */}
      <section className="bg-cream text-dark-green section-padding px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 serif">
            Dois passos. Uma virada.
          </h2>

          <div className="relative mb-12 pl-10 text-left space-y-16 mt-16 max-w-2xl mx-auto">
            {/* Timeline vertical line */}
            <div className="absolute top-8 bottom-12 left-[15px] w-0.5 bg-green-500/50" />

            {/* Passo 1 */}
            <div className="relative">
              <div className="absolute -left-[54px] top-0 w-12 h-12 rounded-xl bg-dark-green text-gold flex items-center justify-center text-xl font-bold shadow-md border border-gold/20">
                1
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-green-900/10 text-green-700 text-[10px] font-bold mb-4 uppercase tracking-widest border border-green-800/10">
                PASSO 1 · E-BOOKS BÔNUS
              </div>
              <h3 className="text-2xl font-bold serif mb-4 text-dark-green">
                Primeiro: arrume a base financeira
              </h3>
              <p className="opacity-80 text-lg leading-relaxed mb-6">
                Prepare a base: primeiro organizamos suas finanças e descobrimos
                seu perfil ideal.
              </p>
              <div className="bg-green-50 text-green-800 p-4 rounded-xl border border-green-200">
                <p className="text-sm font-medium">→ Com a base arrumada, cada novo curso vira dinheiro no bolso mais rápido</p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="relative">
              <div className="absolute -left-[54px] top-0 w-12 h-12 rounded-xl bg-green-500 text-dark-green flex items-center justify-center text-xl font-bold shadow-md">
                2
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-gold/20 text-yellow-800 text-[10px] font-bold mb-4 uppercase tracking-widest border border-gold/30">
                PASSO 2 · OFERTA PRINCIPAL
              </div>
              <h3 className="text-2xl font-bold serif mb-4 text-dark-green">
                Depois: acelere com os 50 melhores cursos gratuitos
              </h3>
              <p className="opacity-80 text-lg leading-relaxed mb-6">
                Execute com direção: acesse os cursos certos e comece sua
                qualificação de elite. Sem perder horas procurando no Google.
              </p>
              <div className="bg-green-50 text-green-800 p-4 rounded-xl border border-green-200">
                <p className="text-sm font-medium">→ Certificado reconhecido + habilidade nova = mais renda em semanas</p>
              </div>
            </div>
          </div>

          <p className="max-w-2xl mx-auto pt-10 text-lg opacity-70">
            Nós acreditamos que a ordem importa: preparar o bolso e a mente
            antes de atacar o mercado é o segredo para não desistir no meio do
            caminho.
          </p>
        </div>
      </section>

      {/* SECTION 5 - O QUE ESTÁ INCLUÍDO */}
      <section className="bg-dark-green text-cream section-padding px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center serif">
            O que você leva no Kit
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-3 p-8 rounded-3xl bg-white/10 border-2 border-gold flex flex-col md:flex-row gap-8 items-center mb-4">
              <div className="w-24 h-24 bg-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-12 h-12 text-dark-green" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold serif mb-2">
                  O Guia das 50 Oportunidades
                </h3>
                <p className="opacity-70 leading-relaxed">
                  A curadoria completa das melhores instituições do mundo em um
                  único PDF interativo.
                </p>
              </div>
            </div>

            {[
              {
                title: "Apostila 1 - Base",
                desc: "Educação financeira prática antes de estudar.",
              },
              {
                title: "Apostila 2 - Caminho",
                desc: "Descubra qual área combina com seu perfil.",
              },
              {
                title: "Apostila 3 - Renda",
                desc: "Como transformar certificados em dinheiro real.",
              },
              {
                title: "Apostila 4 - 90 Dias",
                desc: "Plano semana a semana para seu sucesso.",
              },
              {
                title: "Planilha de Controle",
                desc: "Excel completo para sua vida financeira.",
              },
            ].map((bonus, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2 py-0.5 rounded-md bg-gold text-dark-green text-[10px] font-bold mb-3 uppercase">
                    BÔNUS
                  </span>
                  <h4 className="font-bold text-lg mb-2">{bonus.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {bonus.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl line-through opacity-40 mb-2">De R$ 97,00</p>
            <p className="text-5xl font-bold text-gold mb-8 italic serif">
              Por R$ 15,99
            </p>
            <a href="https://pay.kiwify.com.br/LarNUKO" className="btn-primary">
              Aproveitar Oferta Limitada
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5.5 - DEMO DA PLANILHA */}
      <VideoDemo />

      {/* SECTION 6 - DEPOIMENTOS */}
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
                    "{dep.text}"
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

      {/* SECTION 7 - PARA QUEM É */}
      <section className="bg-dark-green text-cream section-padding px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 serif">
                Este kit é para você se...
              </h2>
              <ul className="space-y-4">
                {[
                  "Quer se qualificar mas não tem dinheiro para cursos pagos.",
                  "Sente que o seu currículo está parado no tempo.",
                  "Usa apenas o celular para estudar e quer conteúdos leves.",
                  "Precisa de organização financeira antes de qualquer mudança.",
                  "Não sabe por onde começar a estudar uma nova carreira.",
                  "Deseja o prestígio de aprender com instituições como Google e Harvard.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 items-start p-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h2 className="text-3xl font-bold mb-8 serif text-gold">
                Este kit NÃO é para você se...
              </h2>
              <ul className="space-y-4 opacity-60">
                {[
                  "Já tem orçamento disponível para pagar MBAs e cursos caros.",
                  "Busca um botão mágico para ficar rico sem nenhum esforço.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - PREÇO FINAL */}
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

          <div className="mb-10">
            <p className="text-2xl line-through opacity-40">De R$ 97,00</p>
            <p className="text-6xl md:text-7xl font-bold text-dark-green serif italic">
              R$ 15,99
            </p>
            <p className="text-sm opacity-60 mt-4 uppercase tracking-widest font-bold">
              Pagamento único · Acesso Vitalício
            </p>
          </div>

          <div className="bg-gold/5 p-6 rounded-2xl border border-gold/20 mb-10 inline-block">
            <p className="text-sm font-bold flex items-center justify-center gap-2 text-gold">
              <Zap className="w-4 h-4 fill-current" /> OFERTA: No checkout
              adicione a Planilha Automática por apenas + R$ 9,90
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 text-sm text-dark-green/70 bg-white/80 rounded-full px-6 py-3 mx-auto max-w-sm border border-green-200">
              <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>
                <strong className="text-dark-green">Garantia de 7 dias</strong> — se não gostar, devolvo 100% do seu dinheiro
              </span>
            </div>

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

      {/* SECTION 9 - GARANTIA */}
      <section className="bg-dark-green text-cream section-padding px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-40 h-40 flex-shrink-0 bg-gold rounded-full flex items-center justify-center border-8 border-gold/20 animate-float">
            <ShieldCheck className="w-20 h-20 text-dark-green" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 serif">
              Garantia de 7 dias sem burocracia
            </h2>
            <p className="text-lg opacity-80 leading-relaxed mb-6">
              O risco é todo meu. Se você não gostar do conteúdo, achar que não
              é para você ou simplesmente mudar de ideia, me manda uma mensagem
              em até 7 dias e eu devolvo 100% do seu valor.{" "}
              <strong>Sem perguntas, sem enrolação.</strong>
            </p>
            <p className="text-gold font-bold italic serif">
              Seu sucesso ou seu dinheiro de volta.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10 - FAQ */}
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
                a: "Sim! Foi desenhado especificamente para quem usa o celular como principal ferramenta. O PDF é responsivo e fácil de ler em qualquer tela.",
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

      {/* SECTION 11 - RODAPÉ */}
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
              "O conhecimento sempre foi de graça. O mapa é que custava caro."
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
