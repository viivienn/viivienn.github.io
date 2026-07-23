import portrait from "@/assets/vivienne.jpg";

const accent = "#C97B5A";

export default function App() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] font-sans text-[#1C1C1C] antialiased">
      <div className="mx-auto max-w-[720px] px-6 py-16 sm:py-24">
        {/* Hero */}
        <header className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Vivienne Chow
            </h1>
            <p className="mt-2 text-[#6B6B6B]">Software Engineer at Google</p>
            <p className="mt-5 leading-relaxed">
              I'm a software engineer at Google working on infrastructure and
              safety systems for products used by billions of people —
              including Gemini. I like solving hard reliability problems and
              building things that quietly just work.
            </p>
            <p className="mt-3 text-sm text-[#6B6B6B]">San Francisco, CA</p>
            <nav className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              {[
                { label: "Email", href: "mailto:viivienn@gmail.com" },
                { label: "LinkedIn", href: "https://linkedin.com/" },
                { label: "GitHub", href: "https://github.com/viivienn" },
                { label: "Résumé", href: "vivienne-chow-resume.pdf" },
              ].map((l, i) => (
                <span key={l.label} className="flex items-center gap-4">
                  {i > 0 && <span className="text-[#C7C7C4]">·</span>}
                  <a
                    href={l.href}
                    className="underline underline-offset-4 decoration-[#1C1C1C]/20 transition-colors hover:decoration-[color:var(--accent)]"
                    style={{ ["--accent" as string]: accent }}
                  >
                    {l.label}
                  </a>
                </span>
              ))}
            </nav>
          </div>
          <img
            src={portrait}
            alt="Portrait of Vivienne Chow"
            className="h-28 w-28 shrink-0 rounded-2xl object-cover sm:h-32 sm:w-32"
          />
        </header>

        <SectionLabel>About</SectionLabel>
        <p className="mt-4 leading-relaxed">
          I'm a backend and infrastructure engineer who ended up working at the
          intersection of large-scale systems and AI. Over the past few years
          I've worked on some of the highest-traffic infrastructure at Google
          and Amazon — the kind of systems that have to stay reliable for
          millions of people at once, quietly, in the background. Lately that's
          meant helping build the safety and reliability infrastructure behind
          Google's Gemini models. I care about building things that are
          dependable, well-designed, and don't fall over under pressure —
          whether that's a distributed system or a good process.
        </p>

        <SectionLabel>What I care about</SectionLabel>
        <div className="mt-4 space-y-3 leading-relaxed">
          <p>
            <span className="font-medium">What I'm drawn to —</span> high-traffic
            systems and the latest technology, but also the quieter parts of a
            system nobody notices until they break — the reliability layer, the
            safety net, the thing that has to work at 3am.
          </p>
          <p>
            <span className="font-medium">How I try to work —</span> clearly,
            calmly, and with the people around the problem, not just the code.
          </p>
        </div>

        <SectionLabel>Highlights</SectionLabel>
        <ul className="mt-4 space-y-3 leading-relaxed list-disc pl-5 marker:text-[#C97B5A]">
          <li>
            Currently building safety and reliability infrastructure for Google
            Gemini — helping keep AI generation safe and fast for products
            across Vertex AI, Google AI Studio, and consumer apps serving
            billions of people, all within a strict &lt;50ms latency budget.
          </li>
          <li>
            Led a multi-quarter redesign of a large-scale distributed database
            to make it resilient across regions, removing a whole class of
            outages.
          </li>
          <li>
            Built emergency override systems that cut incident resolution time
            from hours to minutes during high-stakes regulatory rollouts,
            working across 18 different teams' systems.
          </li>
          <li>
            Built monitoring that catches silent failures other systems miss —
            raised detection of hidden data-quality issues from almost nothing
            to over 95%.
          </li>
          <li>
            Earlier in my career, worked on Amazon's product detail pages —
            one of the highest-traffic pages on the internet — improving load
            speed for millions of daily visitors.
          </li>
        </ul>

        <SectionLabel>Experience</SectionLabel>
        <ul className="mt-4 space-y-6">
          <ExperienceItem
            company="Google"
            title="Software Engineer, Systems & AI Infrastructure"
            dates="Oct 2022 – Present"
            description="Distributed systems and AI safety infrastructure for products serving billions of users."
          />
          <ExperienceItem
            company="Amazon"
            title="Software Development Engineer"
            dates="Jun 2021 – Sep 2022"
            description="Performance and reliability work on Amazon's core product pages."
          />
          <ExperienceItem
            company="ConovaAI"
            title="Cloud Developer"
            dates="May 2020 – May 2021"
            description="Serverless data pipelines and ETL infrastructure."
          />
        </ul>
        <div className="mt-6">
          <a
            href="vivienne-chow-resume.pdf"
            className="inline-flex items-center rounded-full border border-[#1C1C1C]/15 px-4 py-2 text-sm transition-colors hover:border-[#C97B5A] hover:text-[#C97B5A]"
          >
            Download full résumé (PDF)
          </a>
        </div>

        <SectionLabel>Outside of work</SectionLabel>
        <p className="mt-4 leading-relaxed">
          Outside of work I play tennis (still working on my forehand), play
          beach volleyball, and try to make it to a few live music festivals a
          year. I'm also generally curious about how people think and
          communicate, which sneaks into how I approach engineering teams too.
        </p>

        <SectionLabel>Get in touch</SectionLabel>
        <p className="mt-4 leading-relaxed">
          I'm always happy to talk about infrastructure, AI safety, or
          engineering careers — especially with other women in the field. If
          you're building something interesting, hiring, or just want to say
          hi, reach out.
        </p>
        <nav className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {[
            { label: "Email", href: "mailto:viivienn@gmail.com" },
            { label: "LinkedIn", href: "https://linkedin.com/" },
            { label: "GitHub", href: "https://github.com/viivienn" },
          ].map((l, i) => (
            <span key={l.label} className="flex items-center gap-4">
              {i > 0 && <span className="text-[#C7C7C4]">·</span>}
              <a
                href={l.href}
                className="underline underline-offset-4 decoration-[#1C1C1C]/20 hover:decoration-[#C97B5A]"
              >
                {l.label}
              </a>
            </span>
          ))}
        </nav>

        <footer className="mt-20 pt-8 border-t border-[#EAE7E1] text-sm text-[#6B6B6B]">
          Built by Vivienne Chow.
        </footer>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 text-sm font-medium tracking-wide text-[#C97B5A]">
      {children}
    </h2>
  );
}

function ExperienceItem({
  company,
  title,
  dates,
  description,
}: {
  company: string;
  title: string;
  dates: string;
  description: string;
}) {
  return (
    <li>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div>
          <span className="font-medium">{company}</span>
          <span className="text-[#6B6B6B]"> — {title}</span>
        </div>
        <div className="text-sm text-[#6B6B6B] shrink-0">{dates}</div>
      </div>
      <p className="mt-1 text-sm text-[#6B6B6B] leading-relaxed">{description}</p>
    </li>
  );
}