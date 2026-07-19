import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/vivienne.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const mono = "font-mono text-[11px] tracking-[0.14em] uppercase";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${mono} text-[#F5A623]`}>{children}</div>
  );
}

function Section({
  id,
  eyebrow,
  children,
  wide = false,
}: {
  id?: string;
  eyebrow?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section id={id} className="border-t border-[#2A2F36]">
      <div
        className={`mx-auto px-6 sm:px-8 py-20 sm:py-28 ${wide ? "max-w-5xl" : "max-w-[720px]"}`}
      >
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <div className={eyebrow ? "mt-8" : ""}>{children}</div>
      </div>
    </section>
  );
}

function SignalTrace() {
  // Animated ECG-style trace. Respects prefers-reduced-motion via CSS.
  return (
    <div className="relative h-10 w-full overflow-hidden opacity-70" aria-hidden>
      <svg
        viewBox="0 0 800 40"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="fade" x1="0" x2="1">
            <stop offset="0" stopColor="#2A2F36" stopOpacity="0" />
            <stop offset="0.15" stopColor="#2A2F36" stopOpacity="1" />
            <stop offset="0.85" stopColor="#2A2F36" stopOpacity="1" />
            <stop offset="1" stopColor="#2A2F36" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="20" x2="800" y2="20" stroke="url(#fade)" strokeWidth="1" />
        <path
          className="trace-path"
          d="M0 20 L120 20 L128 20 L134 6 L140 34 L146 14 L152 24 L160 20 L280 20 L286 20 L292 12 L298 28 L304 20 L440 20 L448 20 L454 4 L460 36 L466 18 L472 22 L478 20 L620 20 L628 20 L634 10 L640 30 L646 20 L800 20"
          fill="none"
          stroke="#F5A623"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <style>{`
        .trace-path {
          stroke-dasharray: 1600;
          stroke-dashoffset: 1600;
          animation: trace 6s linear infinite;
        }
        @keyframes trace {
          0% { stroke-dashoffset: 1600; }
          70% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1600; }
        }
        @media (prefers-reduced-motion: reduce) {
          .trace-path { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-[#2A2F36] pl-4">
      <div className={`${mono} text-[#F5A623]`}>{label}</div>
      <div className="mt-2 text-sm text-[#E8EAED] leading-snug">{value}</div>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
      {items.map((t) => (
        <span key={t} className={`${mono} text-[#8B939E]`}>
          <span className="text-[#F5A623]">/</span> {t}
        </span>
      ))}
    </div>
  );
}

function AmberLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-[#F5A623] underline decoration-[#F5A623]/30 underline-offset-4 hover:decoration-[#F5A623] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F5A623] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101418]"
    >
      {children}
    </a>
  );
}

function CaseStudy({
  num,
  title,
  oneLiner,
  paragraphs,
  tags,
  diagram,
}: {
  num: string;
  title: string;
  oneLiner: string;
  paragraphs: { label: string; body: string }[];
  tags: string[];
  diagram: React.ReactNode;
}) {
  return (
    <article className="pt-16 first:pt-0">
      <div className={`${mono} text-[#8B939E]`}>
        <span className="text-[#F5A623]">{num}</span>
      </div>
      <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-[#E8EAED] tracking-tight">
        {title}
      </h3>
      <p className="mt-3 text-[#8B939E] italic">{oneLiner}</p>

      <div className="mt-8 border border-[#2A2F36] bg-[#161a1f]/40 p-6">
        {diagram}
      </div>

      <div className="mt-8 space-y-6">
        {paragraphs.map((p) => (
          <p key={p.label} className="text-[#E8EAED]/90 leading-relaxed">
            <span className={`${mono} text-[#F5A623] mr-2`}>{p.label}</span>
            {p.body}
          </p>
        ))}
      </div>

      <Tags items={tags} />
    </article>
  );
}

function DiagramIntrospection() {
  return (
    <svg viewBox="0 0 600 140" className="w-full h-auto" aria-hidden>
      <g fill="none" stroke="#8B939E" strokeWidth="1">
        <rect x="20" y="50" width="120" height="40" />
        <line x1="140" y1="70" x2="220" y2="70" />
        <line x1="180" y1="70" x2="180" y2="20" />
        <line x1="180" y1="20" x2="300" y2="20" />
        <line x1="300" y1="20" x2="300" y2="55" />
        <rect x="220" y="55" width="120" height="30" stroke="#F5A623" />
        <line x1="340" y1="70" x2="440" y2="70" />
        <rect x="440" y="50" width="140" height="40" />
        <path d="M510 90 Q510 120 300 120 Q80 120 80 100" stroke="#F5A623" strokeDasharray="3 3" />
      </g>
      <g fill="#8B939E" fontFamily="IBM Plex Mono, monospace" fontSize="10">
        <text x="80" y="74" textAnchor="middle" fill="#E8EAED">MODEL</text>
        <text x="280" y="73" textAnchor="middle" fill="#F5A623">CLASSIFIER</text>
        <text x="510" y="74" textAnchor="middle" fill="#E8EAED">STEERING</text>
        <text x="180" y="14" textAnchor="middle">activation tap</text>
        <text x="300" y="135" textAnchor="middle">feedback loop</text>
      </g>
    </svg>
  );
}

function DiagramBreakglass() {
  return (
    <svg viewBox="0 0 600 140" className="w-full h-auto" aria-hidden>
      <g fill="none" stroke="#8B939E" strokeWidth="1">
        <circle cx="40" cy="70" r="6" />
        <line x1="46" y1="70" x2="180" y2="70" />
        <rect x="180" y="52" width="120" height="36" />
        <line x1="300" y1="70" x2="360" y2="70" strokeDasharray="4 4" />
        <line x1="330" y1="60" x2="345" y2="80" stroke="#8B939E" />
        <line x1="345" y1="60" x2="330" y2="80" stroke="#8B939E" />
        <rect x="360" y="52" width="120" height="36" opacity="0.4" />
        <line x1="480" y1="70" x2="560" y2="70" strokeDasharray="4 4" opacity="0.4" />
        <circle cx="566" cy="70" r="6" opacity="0.4" />
        <path d="M240 52 Q240 20 400 20 Q520 20 520 60" stroke="#F5A623" />
        <line x1="520" y1="60" x2="520" y2="70" stroke="#F5A623" />
        <polygon points="516,66 524,66 520,74" fill="#F5A623" />
      </g>
      <g fill="#8B939E" fontFamily="IBM Plex Mono, monospace" fontSize="10">
        <text x="240" y="74" textAnchor="middle" fill="#E8EAED">POLICY ENGINE</text>
        <text x="420" y="74" textAnchor="middle">DOWNSTREAM</text>
        <text x="400" y="14" textAnchor="middle" fill="#F5A623">BREAKGLASS BYPASS</text>
        <text x="40" y="94" textAnchor="middle">req</text>
      </g>
    </svg>
  );
}

function DiagramAgent() {
  return (
    <svg viewBox="0 0 600 140" className="w-full h-auto" aria-hidden>
      <g fill="none" stroke="#8B939E" strokeWidth="1">
        <rect x="30" y="50" width="120" height="40" />
        <line x1="150" y1="70" x2="220" y2="70" strokeDasharray="4 4" />
        <line x1="150" y1="40" x2="220" y2="20" strokeDasharray="3 3" opacity="0.4" />
        <line x1="180" y1="30" x2="200" y2="10" stroke="#8B939E" />
        <line x1="200" y1="30" x2="180" y2="10" stroke="#8B939E" />
        <rect x="220" y="55" width="140" height="30" stroke="#F5A623" />
        <line x1="360" y1="70" x2="440" y2="70" />
        <rect x="440" y="50" width="130" height="40" />
      </g>
      <g fill="#8B939E" fontFamily="IBM Plex Mono, monospace" fontSize="10">
        <text x="90" y="74" textAnchor="middle" fill="#E8EAED">AGENT</text>
        <text x="290" y="73" textAnchor="middle" fill="#F5A623">CONSTRAINED GATEWAY</text>
        <text x="505" y="74" textAnchor="middle" fill="#E8EAED">PRODUCTION</text>
        <text x="200" y="45" fill="#8B939E">direct path blocked</text>
      </g>
    </svg>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-[#101418] font-sans text-[#E8EAED] antialiased selection:bg-[#F5A623]/30 selection:text-[#E8EAED]">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-10 items-start">
          <div className="md:col-span-3">
            <div className={`${mono} text-[#F5A623]`}>
              SYSTEMS ENGINEER — AI SAFETY INFRASTRUCTURE
            </div>
            <h1 className="mt-8 font-display font-semibold text-[#E8EAED] text-[2.5rem] sm:text-6xl leading-[1.05] tracking-[-0.02em]">
              I build the infrastructure that keeps frontier AI safe at scale.
            </h1>
            <div className="mt-10">
              <SignalTrace />
            </div>
            <p className="mt-8 text-[#8B939E] text-lg leading-relaxed max-w-xl">
              Software engineer at Google. I ship the real-time safety systems that sit inside Gemini's inference path — introspection pipelines, policy engines, and the failover infrastructure behind billion-user products.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Stat label="LATENCY" value="<50 ms p99 in Gemini's serving path" />
              <Stat label="SCALE" value="Tens of millions of peak QPS · billions of users" />
              <Stat label="MTTR" value="Policy incidents: 2+ hrs → under 5 min" />
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              <AmberLink href="#work">Read the case studies ↓</AmberLink>
              <AmberLink href="#contact">Get in touch</AmberLink>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-px border border-[#F5A623]/40 pointer-events-none" />
              <img
                src={portrait.url}
                alt="Vivienne Chow"
                className="w-full h-auto grayscale block"
                style={{ filter: "grayscale(100%)" }}
              />
              <div className={`${mono} text-[#8B939E] mt-3 flex justify-between`}>
                <span>VIVIENNE CHOW</span>
                <span className="text-[#F5A623]">/ 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <Section id="about" eyebrow="00 — WHAT I DO">
        <div className="space-y-6 text-[#E8EAED]/90 leading-relaxed text-[17px]">
          <p>
            Most engineers either build large-scale systems or work with LLMs. I do the thing in between: I take frontier-model safety research and make it run in production — real-time, low-latency, fail-safe, at planetary scale.
          </p>
          <p>
            At Google I engineered introspection infrastructure for Gemini that intercepts neural activations to classify and steer model generation in real time, deployed across Vertex AI, Google AI Studio, and consumer surfaces. I've also built the other side of the reliability story: emergency override ("breakglass") systems for global policy engines under strict European regulation, autonomous incident-response agents, and capacity automation for Google's Zanzibar authorization system.
          </p>
          <p className="text-[#E8EAED]">
            The through-line: systems that have to work when everything else doesn't.
          </p>
        </div>
      </Section>

      {/* SELECTED WORK */}
      <Section id="work" eyebrow="— SELECTED WORK" wide>
        <div className="max-w-[720px]">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Case studies.
          </h2>
          <p className="mt-3 text-[#8B939E]">
            Ordered by relevance to frontier-AI safety and reliability work.
          </p>
        </div>

        <div className="mt-16 space-y-20 divide-y divide-[#2A2F36]">
          <CaseStudy
            num="01"
            title="Real-time LLM introspection for Gemini"
            oneLiner="Safety classification inside the inference path of a frontier model."
            diagram={<DiagramIntrospection />}
            paragraphs={[
              {
                label: "PROBLEM",
                body: "Post-hoc output filtering is too late and too coarse for frontier-model safety. Google needed generation-time control based on what the model is internally representing — not just what it emits.",
              },
              {
                label: "CONSTRAINTS",
                body: "The system sits in the serving path of Gemini across Vertex AI, AI Studio, and consumer products under a strict <50 ms p99 latency budget. Every millisecond of added latency is multiplied by billions of tokens. Failure has to be fail-safe, never fail-open silently.",
              },
              {
                label: "BUILT",
                body: "The scaling and serving infrastructure for activation-level introspection — low-latency pipelines that read internal neural activations and classify/steer generation in real time. I also built the automated rollout path for new safety-model checkpoints: deployment pipelines with latency regression gates and qualitative evaluation, so new checkpoints ship safely without degrading production, plus cohort-based anomaly detection to catch silent semantic drift across massive inference workloads.",
              },
              {
                label: "OUTCOME",
                body: "Generation-time safety guardrails running across Google's flagship AI surfaces, with checkpoint deployment automated end-to-end.",
              },
            ]}
            tags={["LLM INFERENCE", "INTERPRETABILITY INFRA", "LOW-LATENCY SERVING", "ANOMALY DETECTION"]}
          />

          <CaseStudy
            num="02"
            title="Global breakglass infrastructure under EU regulation"
            oneLiner="Emergency override systems for a planet-scale policy engine."
            diagram={<DiagramBreakglass />}
            paragraphs={[
              {
                label: "PROBLEM",
                body: "Strict European data regulations (DMA) required hard enforcement inside Google's data-sharing policy engines. If enforcement infrastructure itself failed, it could take down revenue-critical products globally.",
              },
              {
                label: "CONSTRAINTS",
                body: "The override path has to be secure (bypassing authorization is inherently dangerous), auditable, and instant — usable by an on-call engineer at 3am during a global incident.",
              },
              {
                label: "BUILT",
                body: "End-to-end emergency override (\"breakglass\") services in C++, Java, and Go that let engineers securely bypass failing authorization chains. I orchestrated integration across 18 distinct storage and data-processing systems, designed and executed global disaster-recovery exercises simulating severe policy-engine outages, and built cohort-based monitoring that detects silent authorization failures the primary alerting missed.",
              },
              {
                label: "OUTCOME",
                body: "A safety net that prevents massive revenue-impacting outages during regulatory enforcement — critical policy-incident MTTR cut from 2+ hours to under 5 minutes — validated through cross-organizational disaster testing, with playbooks that trained global on-call teams. The cohort monitoring system processes millions of policy verdicts per minute and raised silent-drift detection from effectively zero to over 95%.",
              },
            ]}
            tags={["C++ / JAVA / GO", "POLICY ENGINES", "DISASTER RECOVERY", "18 SYSTEMS INTEGRATED"]}
          />

          <CaseStudy
            num="03"
            title="Autonomous incident-response agents"
            oneLiner="Giving LLM agents the ability to fix production — safely."
            diagram={<DiagramAgent />}
            paragraphs={[
              {
                label: "PROBLEM",
                body: "Distributed-system incidents demand fast, correct, repetitive investigation. LLM agents can do this work, but handing an AI model access to production infrastructure is exactly as dangerous as it sounds.",
              },
              {
                label: "CONSTRAINTS",
                body: "Agents must act autonomously (the value is speed) inside hard guarantees (the requirement is safety). Non-determinism is acceptable in reasoning, never in execution.",
              },
              {
                label: "BUILT",
                body: "The technical design for agentic workflows that let GenAI models autonomously investigate, triage, and mitigate infrastructure incidents and data-compliance violations. The core contribution: highly constrained, deterministic execution environments for AI tool use — agents reason freely but can only act through vetted, bounded recovery playbooks.",
              },
              {
                label: "OUTCOME",
                body: "AI agents that execute complex recovery procedures without human intervention, with a permission model strict enough for protected-data environments.",
              },
            ]}
            tags={["AGENTIC SYSTEMS", "LLM TOOL USE", "SANDBOXED EXECUTION", "SRE AUTOMATION"]}
          />

          {/* ALSO SHIPPED */}
          <div className="pt-16">
            <div className={`${mono} text-[#F5A623]`}>ALSO SHIPPED</div>
            <ul className="mt-8 space-y-4">
              {[
                "Multi-quarter active-active redesign of a distributed graph database serving tens of millions of peak QPS — eliminated single-datacenter failure domains on critical authentication paths (C++, Go, cgo bridges)",
                "Automated multi-region capacity tuning plugin for Google Zanzibar, Google's planet-scale authorization system",
                "Authored a multi-year production mitigation roadmap; primary reliability consultant to Staff+ stakeholders",
                "Previously: latency and security-migration work on Amazon's product detail pages",
              ].map((line) => (
                <li key={line} className="flex gap-4 text-[#E8EAED]/90 leading-relaxed">
                  <span className={`${mono} text-[#F5A623] pt-1 shrink-0`}>—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* WRITING */}
      <Section id="writing" eyebrow="04 — WRITING">
        <p className="text-[#8B939E]">Notes on building safety systems that have to work.</p>

        <div className="mt-10 divide-y divide-[#2A2F36] border-y border-[#2A2F36]">
          {[
            {
              t: "Running safety classifiers inside the inference path",
              s: "What it actually costs to do generation-time safety at billions of tokens.",
            },
            {
              t: "Breakglass: designing the override you hope nobody uses",
              s: "Security, auditability, and 3am usability.",
            },
            {
              t: "Agents in production: freedom to reason, no freedom to act",
              s: "Constrained execution for LLM tool use.",
            },
          ].map((a, i) => (
            <article key={a.t} className="py-6 flex gap-6 items-start">
              <div className={`${mono} text-[#8B939E] pt-1 w-8 shrink-0`}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl text-[#E8EAED] font-medium tracking-tight">
                  {a.t}
                </h3>
                <p className="mt-2 text-[#8B939E]">{a.s}</p>
              </div>
              <div className={`${mono} text-[#F5A623] pt-1 shrink-0 hidden sm:block`}>
                DRAFT · COMING SOON
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="05 — CONTACT">
        <p className="font-display text-2xl sm:text-3xl text-[#E8EAED] leading-snug tracking-tight">
          I'm interested in safety systems, inference infrastructure, and agentic reliability work at frontier AI labs.
        </p>
        <p className="mt-6 text-[#8B939E]">
          Outside of production: I mentor early-career women engineers through Women@Google.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          <AmberLink href="mailto:viivienn@gmail.com">
            <span className={mono}>EMAIL</span>{" "}
            <span className="font-mono text-sm normal-case tracking-normal">viivienn@gmail.com</span>
          </AmberLink>
          <AmberLink href="https://linkedin.com/">
            <span className={mono}>LINKEDIN</span>
          </AmberLink>
          <AmberLink href="https://github.com/viivienn">
            <span className={mono}>GITHUB</span>{" "}
            <span className="font-mono text-sm normal-case tracking-normal">github.com/viivienn</span>
          </AmberLink>
        </div>

        <div className={`${mono} text-[#8B939E] mt-20 pt-8 border-t border-[#2A2F36] flex justify-between`}>
          <span>BUILT WITH INTENT. NO TRACKERS.</span>
          <span className="text-[#F5A623]">/ EOF</span>
        </div>
      </Section>
    </main>
  );
}
