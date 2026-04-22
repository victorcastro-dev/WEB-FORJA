import type { ReactNode } from "react";

import { TrackedWhatsAppButtonLink } from "@/components/analytics/tracked-whatsapp-button-link";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

const demoWhatsAppUrl = "https://wa.me/5511920142726";
const finalWhatsAppUrl =
  "https://wa.me/5511920142726?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20sistema%20para%20barbearia.";
const caseUrl = "https://www.erickdavibarbearia.com.br/";

const heroSignals = [
  {
    label: "Sem agenda no improviso",
    description: "O cliente escolhe serviço, horário e profissional sem depender de mensagem solta.",
  },
  {
    label: "Sinal antes da reserva",
    description: "Sem pagamento antecipado, o horário não fica bloqueado na confiança.",
  },
  {
    label: "Dono com visão do caixa",
    description: "Agenda, bloqueios e faturamento ficam no mesmo painel de controle.",
  },
] as const;

const painPoints = [
  {
    icon: "message",
    title: "WhatsApp virou agenda",
    description:
      "Mensagens perdidas, horários duplicados e cliente que some sem confirmar atrapalham a operação todo dia.",
  },
  {
    icon: "book",
    title: "Caderninho não escala",
    description:
      "Fica difícil saber quem cancelou, quem remarcou e quanto a barbearia realmente vai faturar na semana.",
  },
  {
    icon: "coin",
    title: "No-show vira prejuízo",
    description:
      "Sem sinal cobrado na hora, a reserva depende da boa vontade do cliente e sobra horário vazio no fim de semana.",
  },
] as const;

const featureItems = [
  {
    icon: "calendar",
    title: "Agendamento online",
    description:
      "O cliente agenda pelo celular, escolhe serviço, data, horário e profissional sem precisar abrir conversa.",
  },
  {
    icon: "coin",
    title: "Pagamento de sinal integrado",
    description: "O sinal é cobrado na hora do agendamento. Sem sinal, sem reserva confirmada.",
  },
  {
    icon: "telegram",
    title: "Notificação automática no Telegram",
    description:
      "Novo agendamento, reagendamento ou cancelamento chega na hora para o dono acompanhar a agenda sem ruído.",
  },
  {
    icon: "mail",
    title: "E-mail de confirmação automático",
    description: "Assim que a reserva é feita, o cliente recebe a confirmação por e-mail sem ação manual da equipe.",
  },
  {
    icon: "dashboard",
    title: "Painel de controle da agenda",
    description:
      "Visualize os agendamentos do dia, semana ou mês, bloqueie horários e gerencie tudo no painel admin.",
  },
  {
    icon: "chart",
    title: "Dashboard de faturamento",
    description:
      "Veja faturamento diário, mensal ou por período com resumos claros para entender o caixa da operação.",
  },
  {
    icon: "gallery",
    title: "Portfólio, serviços e preços",
    description: "O site apresenta o espaço, os serviços e os valores com visual profissional para vender melhor.",
  },
  {
    icon: "mobile",
    title: "100% responsivo",
    description: "Funciona bem no celular tanto para o cliente que agenda quanto para quem administra o sistema.",
  },
] as const;

const deliveredItems = [
  "Site comercial com visual profissional para a barbearia.",
  "Agendamento com pagamento de sinal para segurar a reserva.",
  "Painel administrativo com agenda, bloqueios e controle operacional.",
  "Dashboard de faturamento para acompanhar o caixa em tempo real.",
  "Bot no Telegram e e-mails automáticos para reduzir dependência de atendimento manual.",
] as const;

const processSteps = [
  {
    title: "Briefing",
    description: "Conversa rápida para entender sua barbearia, serviços, horários, equipe e regra de agenda.",
  },
  {
    title: "Proposta",
    description: "Escopo, prazo e investimento são apresentados com clareza para você aprovar sem ruído.",
  },
  {
    title: "Desenvolvimento",
    description: "O sistema é construído e testado enquanto você acompanha o andamento da entrega.",
  },
  {
    title: "Entrega e suporte",
    description: "Publicação, treinamento de uso e suporte pós-entrega para colocar a operação no ar.",
  },
];

const idealProfiles = [
  {
    icon: "message",
    title: "Barbearia que ainda agenda no WhatsApp",
    description: "Quer parar de depender de mensagens para organizar horário, profissional e confirmação.",
  },
  {
    icon: "chair",
    title: "Barbeiro solo ou equipe pequena",
    description: "Precisa parecer mais profissional sem montar uma operação complexa demais para manter.",
  },
  {
    icon: "team",
    title: "Barbearia com movimento alto",
    description: "Perde dinheiro com no-show e precisa enxergar agenda e faturamento com mais controle.",
  },
] as const;

const warmPrimaryClassName =
  "border-signature/60 bg-signature text-canvas shadow-[0_16px_34px_rgba(215,154,61,0.24)] hover:border-signature hover:bg-signature/92 hover:text-canvas hover:shadow-[0_24px_48px_rgba(215,154,61,0.28)]";

export const metadata = buildMetadata({
  title: "Sistema web para barbearias",
  description:
    "Landing page da WEBFORJA para vender sistema web de barbearia com agendamento online, sinal, painel admin, Telegram e dashboard de faturamento.",
  path: "/sistema-barbearia",
});

type IconName =
  | "book"
  | "calendar"
  | "chair"
  | "chart"
  | "coin"
  | "dashboard"
  | "gallery"
  | "mail"
  | "message"
  | "mobile"
  | "team"
  | "telegram";

type Tone = "primary" | "secondary" | "signature";

function Icon({ name }: { name: IconName }) {
  const props = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  switch (name) {
    case "book":
      return (
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <path {...props} d="M6.5 4.5h8a3 3 0 0 1 3 3v12h-8a3 3 0 0 0-3 3z" />
          <path {...props} d="M17.5 19.5h-8a3 3 0 0 0-3 3v-15a3 3 0 0 1 3-3h8" />
        </svg>
      );
    case "calendar":
      return (
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <rect {...props} height="14" rx="2.5" width="15" x="4.5" y="6.5" />
          <path {...props} d="M8 3.5v5M16 3.5v5M4.5 10.5h15" />
          <path {...props} d="M8.5 14.5h2M13.5 14.5h2M8.5 18h2" />
        </svg>
      );
    case "chair":
      return (
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <path {...props} d="M7 10.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3H7z" />
          <path {...props} d="M6 13.5h12v3H6zM8 16.5v4M16 16.5v4M5 20.5h14" />
        </svg>
      );
    case "chart":
      return (
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <path {...props} d="M5 19.5h14M8 17.5v-5M12 17.5v-9M16 17.5v-3" />
          <path {...props} d="m7.5 9.5 3 3 5-6 2 2" />
        </svg>
      );
    case "coin":
      return (
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <ellipse {...props} cx="12" cy="7" rx="5.5" ry="2.5" />
          <path {...props} d="M6.5 7v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V7M6.5 11v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4" />
        </svg>
      );
    case "dashboard":
      return (
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <rect {...props} height="6" rx="1.8" width="7" x="4" y="4" />
          <rect {...props} height="10" rx="1.8" width="7" x="13" y="4" />
          <rect {...props} height="8" rx="1.8" width="7" x="4" y="12" />
          <rect {...props} height="4" rx="1.8" width="7" x="13" y="16" />
        </svg>
      );
    case "gallery":
      return (
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <rect {...props} height="14" rx="2.5" width="15" x="4.5" y="5" />
          <path {...props} d="m7.5 16 3.2-3.5 2.4 2.5 2.4-3 2 4M9 9.5h.01" />
        </svg>
      );
    case "mail":
      return (
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <rect {...props} height="12" rx="2.5" width="16" x="4" y="6" />
          <path {...props} d="m5 8 7 5 7-5" />
        </svg>
      );
    case "message":
      return (
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <path {...props} d="M6 7.5h12a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 18 17.5H11l-4.5 3v-3H6A2.5 2.5 0 0 1 3.5 15v-5A2.5 2.5 0 0 1 6 7.5Z" />
          <path {...props} d="M8 11.5h8M8 14.5h5" />
        </svg>
      );
    case "mobile":
      return (
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <rect {...props} height="17" rx="2.8" width="10" x="7" y="3.5" />
          <path {...props} d="M10.5 6.5h3M11 17.5h2" />
        </svg>
      );
    case "team":
      return (
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <path {...props} d="M9 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM16 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path {...props} d="M4.5 18.5a4.5 4.5 0 0 1 9 0M13 18.5a3.5 3.5 0 0 1 7 0" />
        </svg>
      );
    case "telegram":
      return (
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
          <path {...props} d="m20 5-2.1 13.2c-.2.9-.8 1.1-1.5.7l-3.8-2.8-1.8 1.8c-.2.2-.4.4-.8.4l.3-3.9L17.5 8c.3-.3-.1-.5-.5-.3l-8.9 5.6-3.8-1.2c-.8-.2-.8-.8.2-1.2L19 5.1c.7-.2 1.2.2 1 .9Z" />
        </svg>
      );
  }
}

function IconBadge({
  children,
  icon,
  tone = "secondary",
}: {
  children?: ReactNode;
  icon: IconName;
  tone?: Tone;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border",
        tone === "primary" && "border-primary/25 bg-primary/10 text-primary",
        tone === "secondary" && "border-secondary/25 bg-secondary/10 text-secondary",
        tone === "signature" && "border-signature/25 bg-signature/10 text-signature",
      )}
    >
      {children ?? <Icon name={icon} />}
    </span>
  );
}

function DashboardPreview() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden rounded-[30px] border border-border/80 bg-canvas/70 p-4 shadow-[0_28px_60px_rgba(4,10,18,0.28)] sm:p-5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-secondary/0 via-secondary/60 to-signature/0" />
      <div className="rounded-[24px] border border-border/80 bg-surface/95 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-signature" />
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          </div>
          <div className="rounded-full border border-border/70 bg-surface-soft/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-text/70">
            Painel da barbearia
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[22px] border border-border/70 bg-surface-soft/80 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Agenda de hoje</p>
                <p className="mt-2 text-lg font-semibold text-text">12 horários ativos</p>
              </div>
              <IconBadge icon="calendar" tone="signature" />
            </div>
            <div className="mt-4 grid gap-2">
              {[
                { time: "09:00", label: "Corte + barba", status: "Sinal pago" },
                { time: "11:30", label: "Pigmentação", status: "Confirmado" },
                { time: "14:00", label: "Corte premium", status: "Telegram enviado" },
              ].map((item) => (
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-canvas/70 px-3 py-2" key={item.time}>
                  <div>
                    <p className="text-sm font-semibold text-text">{item.time}</p>
                    <p className="text-xs text-text/68">{item.label}</p>
                  </div>
                  <span className="rounded-full border border-secondary/25 bg-secondary/10 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-secondary">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[22px] border border-border/70 bg-surface-soft/80 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Faturamento</p>
                  <p className="mt-2 text-lg font-semibold text-text">R$ 6.480</p>
                </div>
                <IconBadge icon="chart" tone="secondary" />
              </div>
              <div className="mt-4 flex items-end gap-2">
                {[38, 55, 42, 76, 62, 88, 71].map((value, index) => (
                  <span
                    className={cn(
                      "block w-full rounded-t-full",
                      index === 5 ? "bg-signature/80" : index % 2 === 0 ? "bg-secondary/70" : "bg-primary/65",
                    )}
                    key={value}
                    style={{ height: `${value}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[22px] border border-border/70 bg-surface-soft/80 p-4">
              <div className="flex items-center gap-3">
                <IconBadge icon="telegram" tone="primary" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Alerta instantâneo</p>
                  <p className="mt-1 text-sm font-semibold text-text">Novo agendamento: 16:30 com sinal aprovado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CasePreview() {
  return (
    <div aria-hidden="true" className="panel relative overflow-hidden p-4 sm:p-5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-signature/0 via-signature/60 to-secondary/0" />
      <div className="rounded-[26px] border border-border/75 bg-canvas/75 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-text/72">
            <span className="h-2.5 w-2.5 rounded-full bg-signature" />
            Erick Davi Barbearia
          </div>
          <div className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-secondary">
            Projeto no ar
          </div>
        </div>

        <div className="mt-4 rounded-[24px] border border-border/75 bg-surface/95 p-4 sm:p-5">
          <div className="grid gap-3 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="rounded-[22px] border border-border/70 bg-surface-soft/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Fluxo do cliente</p>
              <div className="mt-4 grid gap-3">
                {[
                  "Escolhe o serviço e o profissional",
                  "Seleciona dia e horário",
                  "Paga o sinal para confirmar",
                  "Recebe e-mail de confirmação",
                ].map((step, index) => (
                  <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-canvas/72 px-3 py-2.5" key={step}>
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signature/25 bg-signature/10 text-xs font-semibold text-signature">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-text/88">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-[22px] border border-border/70 bg-surface-soft/90 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Resumo admin</p>
                    <p className="mt-2 text-lg font-semibold text-text">Agenda + caixa no mesmo lugar</p>
                  </div>
                  <IconBadge icon="dashboard" tone="signature" />
                </div>
              </div>
              <div className="rounded-[22px] border border-border/70 bg-surface-soft/90 p-4">
                <div className="flex items-center gap-3">
                  <IconBadge icon="telegram" tone="secondary" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Telegram</p>
                    <p className="mt-1 text-sm text-text/88">Aviso imediato para novo agendamento, reagendamento e cancelamento.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[22px] border border-border/70 bg-surface-soft/90 p-4">
                <div className="flex items-center gap-3">
                  <IconBadge icon="mail" tone="primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">E-mail</p>
                    <p className="mt-1 text-sm text-text/88">Confirmação automática enviada assim que a reserva é feita.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BarberShopSystemPage() {
  return (
    <>
      <section className="section-space section-texture section-texture-hero">
        <Container className="grid gap-7 xl:grid-cols-[1.04fr_0.96fr]">
          <Reveal as="div" className="panel-strong hero-card-glow relative overflow-hidden p-7 sm:p-10 lg:p-12" variant="scale">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-signature/0 via-signature/70 to-secondary/0" />
            <ParallaxLayer
              className="right-[-5rem] top-[-4rem] h-44 w-44 rounded-full blur-3xl"
              rotate={2.1}
              scale={1.05}
              strength={20}
            >
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--color-signature)_/_0.22),transparent_70%)]" />
            </ParallaxLayer>
            <ParallaxLayer
              className="bottom-[-5rem] left-[-4rem] h-48 w-48 rounded-full blur-3xl"
              rotate={-2}
              scale={1.04}
              strength={-18}
            >
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--color-secondary)_/_0.16),transparent_72%)]" />
            </ParallaxLayer>
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">Sistema Web para Barbearias</span>
                <span className="signature-chip">Case real publicado</span>
              </div>

              <h1 className="mt-6 max-w-4xl text-[2.35rem] leading-[1.04] sm:text-5xl lg:text-6xl">
                Seu cliente agenda, paga o sinal e você recebe a notificação. Tudo automático.
              </h1>

              <p className="lead-copy mt-5 max-w-2xl">
                Sistema web completo para barbearias com agendamento online, cobrança de sinal,
                alertas no Telegram, e-mail automático e painel para controlar agenda e
                faturamento sem depender do WhatsApp.
              </p>

              <div className="cta-cluster mt-8">
                <TrackedWhatsAppButtonLink
                  className={cn("sm:min-w-[15rem]", warmPrimaryClassName)}
                  href={demoWhatsAppUrl}
                  placement="sistema_barbearia_hero"
                  size="lg"
                  variant="primary"
                >
                  Quero ver o sistema funcionando
                </TrackedWhatsAppButtonLink>
                <ButtonLink className="sm:min-w-[14rem]" external href={caseUrl} size="lg" variant="secondary">
                  Ver o case do Erick Davi
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroSignals.map((item, index) => (
                  <div className="panel-soft interactive-panel p-4" key={item.label}>
                    <p className="meta-label">{item.label}</p>
                    <p className="mt-3 text-sm text-text/90">{item.description}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-text/58">
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full",
                          index === 0 ? "bg-secondary" : index === 1 ? "bg-signature" : "bg-primary",
                        )}
                      />
                      Fluxo real de operação
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal as="div" className="panel relative overflow-hidden p-5 sm:p-8" delay={120} variant="soft">
            <ParallaxLayer
              className="right-[-4rem] top-[-2rem] h-28 w-28 rounded-full blur-3xl"
              rotate={1.4}
              scale={1.02}
              strength={15}
            >
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--color-secondary)_/_0.18),transparent_72%)]" />
            </ParallaxLayer>
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="meta-label">Visual do sistema</p>
                  <h2 className="mt-3 text-[1.85rem] leading-tight text-text sm:text-[2.1rem]">
                    Agenda, sinais e faturamento no mesmo lugar.
                  </h2>
                </div>
                <span className="hidden rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary sm:inline-flex">
                  Feito para mobile
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-text/80 sm:text-base">
                Um mock estilizado da experiência para mostrar como a barbearia sai do improviso e
                passa a ter um fluxo mais previsível.
              </p>

              <div className="mt-6">
                <DashboardPreview />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container>
          <SectionIntro
            description="O problema não é só agendar. É perder tempo, perder dinheiro e não enxergar o que está acontecendo."
            eyebrow="Dor real"
            title="Quando a agenda depende de conversa solta, a operação fica sem controle"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {painPoints.map((item, index) => (
              <Reveal
                as="article"
                className="panel interactive-panel h-full p-6 sm:p-7"
                delay={index * 80}
                key={item.title}
                variant="scale"
              >
                <IconBadge
                  icon={item.icon}
                  tone={index === 0 ? "secondary" : index === 1 ? "primary" : "signature"}
                />
                <h3 className="mt-5 text-2xl text-text">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-text/82">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container>
          <SectionIntro
            description="O sistema foi pensado para o dono da barbearia enxergar a operação, reduzir no-show e profissionalizar o atendimento."
            eyebrow="O que o sistema faz"
            title="Tudo o que precisa para parar de organizar reserva no braço"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureItems.map((item, index) => (
              <Reveal
                as="article"
                className="panel-soft interactive-panel h-full p-5 sm:p-6"
                delay={index * 60}
                key={item.title}
                variant="soft"
              >
                <div className="flex items-center justify-between gap-3">
                  <IconBadge
                    icon={item.icon}
                    tone={index % 3 === 0 ? "signature" : index % 2 === 0 ? "secondary" : "primary"}
                  />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-xl leading-tight text-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text/82">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionIntro
              description="Existe um case real publicado que mostra o sistema aplicado em uma barbearia premium com operação de verdade."
              eyebrow="Case real"
              title="Erick Davi Barbearia: marca profissional, reservas organizadas e menos dependência de WhatsApp"
            />

            <Reveal as="div" className="panel p-5 sm:p-7" delay={120} variant="soft">
              <p className="meta-label">Barbearia premium em Itaquera, SP</p>
              <div className="mt-5 grid gap-4">
                <div className="panel-soft p-4">
                  <p className="meta-label">Contexto</p>
                  <p className="mt-2 text-sm leading-6 text-text/88">
                    Precisava profissionalizar a marca, organizar reservas e parar de depender do
                    WhatsApp para agendar.
                  </p>
                </div>
                <div className="panel-soft p-4">
                  <p className="meta-label">Solução entregue</p>
                  <p className="mt-2 text-sm leading-6 text-text/88">
                    Sistema completo com site, agendamento com sinal, painel admin, dashboard de
                    faturamento, bot no Telegram e e-mail automático.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {deliveredItems.map((item) => (
                  <span
                    className="inline-flex items-center rounded-full border border-border/70 bg-surface-soft/70 px-3 py-2 text-xs font-medium text-text/84"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="cta-cluster cta-cluster-tight mt-6">
                <ButtonLink className="sm:min-w-[12rem]" external href={caseUrl} variant="primary">
                  Ver sistema no ar
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal as="div" delay={100} variant="scale">
            <CasePreview />
          </Reveal>
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-6">
            <SectionIntro
              description="O fluxo é direto para sair do briefing e chegar em uma entrega real, sem proposta genérica nem escopo nebuloso."
              eyebrow="Como funciona"
              title="Quatro etapas para colocar o sistema no ar com clareza"
            />

            <Reveal as="div" className="panel p-5 sm:p-7" delay={120} variant="soft">
              <p className="meta-label">Prazo e acompanhamento</p>
              <h3 className="mt-4 text-2xl text-text">Escopo claro, andamento visível e entrega com suporte.</h3>
              <p className="mt-4 text-base leading-7 text-text/82">
                O projeto começa pelo que mais pesa na rotina da barbearia: agenda, confirmação e
                caixa. A primeira versão já entra para resolver o fluxo crítico de verdade.
              </p>
              <div className="accent-line my-6" />
              <p className="text-sm text-text/78">
                Em cenários enxutos, a operação pode sair do improviso e entrar no ar em menos de
                15 dias.
              </p>
            </Reveal>
          </div>

          <ProcessTimeline steps={processSteps} />
        </Container>
      </section>

      <section className="section-space section-texture pt-0">
        <Container>
          <SectionIntro
            align="center"
            description="Nem toda barbearia precisa de sistema agora. Estas são as três situações em que a solução faz mais sentido."
            eyebrow="Para quem faz sentido"
            title="Quando vale investir em um sistema próprio para a barbearia"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {idealProfiles.map((item, index) => (
              <Reveal
                as="article"
                className="panel-soft interactive-panel h-full p-6 sm:p-7"
                delay={index * 80}
                key={item.title}
                variant="soft"
              >
                <IconBadge
                  icon={item.icon}
                  tone={index === 0 ? "secondary" : index === 1 ? "signature" : "primary"}
                />
                <h3 className="mt-5 text-2xl leading-tight text-text">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-text/82">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space section-texture section-texture-band pt-0">
        <Container>
          <Reveal as="div" className="panel-strong overflow-hidden p-7 sm:p-10 lg:p-12" variant="scale">
            <ParallaxLayer
              className="left-[-5rem] top-[-3rem] h-44 w-44 rounded-full blur-3xl"
              rotate={-2}
              scale={1.05}
              strength={18}
            >
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--color-signature)_/_0.2),transparent_72%)]" />
            </ParallaxLayer>
            <ParallaxLayer
              className="bottom-[-5rem] right-[-4rem] h-44 w-44 rounded-full blur-3xl"
              rotate={2}
              scale={1.06}
              strength={-18}
            >
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--color-secondary)_/_0.16),transparent_74%)]" />
            </ParallaxLayer>

            <div className="relative z-10">
              <span className="eyebrow">Próximo passo</span>
              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl lg:text-5xl">
                    Seu sistema pode estar no ar em menos de 15 dias.
                  </h2>
                  <p className="lead-copy mt-4 max-w-2xl">
                    O próximo passo é uma conversa rápida pelo WhatsApp para entender serviços,
                    horários, profissionais e o fluxo da sua barbearia.
                  </p>
                </div>

                <div className="cta-cluster">
                  <TrackedWhatsAppButtonLink
                    className={cn("sm:min-w-[14rem]", warmPrimaryClassName)}
                    href={finalWhatsAppUrl}
                    placement="sistema_barbearia_final"
                    size="lg"
                    variant="primary"
                  >
                    Falar com a WEBFORJA
                  </TrackedWhatsAppButtonLink>
                  <ButtonLink className="sm:min-w-[13rem]" external href={caseUrl} size="lg" variant="secondary">
                    Ver o case do Erick Davi
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
