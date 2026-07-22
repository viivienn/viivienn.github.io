import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/vivienne.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] font-sans text-[#1f2328] antialiased">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        {/* Header */}
        <header className="flex items-center gap-6">
          <img
            src={portrait.url}
            alt="Vivienne Chow"
            className="h-20 w-20 rounded-full object-cover grayscale"
          />
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-tight">
              Vivienne Chow
            </h1>
            <p className="mt-1 text-[#5b6572]">
              Software engineer at Google. Based in London.
            </p>
          </div>
        </header>

        {/* About */}
        <section className="mt-12">
          <p className="text-[#1f2328] leading-relaxed">
            Hi, I'm Vivienne. I work on backend infrastructure at Google, mostly
            around reliability, safety, and large-scale serving systems. Before
            that I was at Amazon working on the product detail page.
          </p>
          <p className="mt-4 text-[#1f2328] leading-relaxed">
            Outside of work I mentor early-career women engineers through
            Women@Google, read a lot, and drink too much coffee.
          </p>
        </section>

        {/* Experience */}
        <section className="mt-12">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[#5b6572]">
            Experience
          </h2>
          <ul className="mt-6 space-y-6">
            <li>
              <div className="flex items-baseline justify-between gap-4">
                <div className="font-medium">Software Engineer — Google</div>
                <div className="text-sm text-[#5b6572] shrink-0">2020 — present</div>
              </div>
              <p className="mt-1 text-sm text-[#5b6572]">
                Backend infrastructure work across a few teams — serving systems,
                reliability, and internal tooling.
              </p>
            </li>
            <li>
              <div className="flex items-baseline justify-between gap-4">
                <div className="font-medium">Software Engineer — Amazon</div>
                <div className="text-sm text-[#5b6572] shrink-0">2018 — 2020</div>
              </div>
              <p className="mt-1 text-sm text-[#5b6572]">
                Worked on the product detail page — performance and migrations.
              </p>
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="mt-12">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[#5b6572]">
            Elsewhere
          </h2>
          <ul className="mt-6 space-y-2 text-[#1f2328]">
            <li>
              Email —{" "}
              <a
                href="mailto:viivienn@gmail.com"
                className="underline underline-offset-4 decoration-[#1f2328]/30 hover:decoration-[#1f2328]"
              >
                viivienn@gmail.com
              </a>
            </li>
            <li>
              GitHub —{" "}
              <a
                href="https://github.com/viivienn"
                className="underline underline-offset-4 decoration-[#1f2328]/30 hover:decoration-[#1f2328]"
              >
                github.com/viivienn
              </a>
            </li>
            <li>
              LinkedIn —{" "}
              <a
                href="https://linkedin.com/"
                className="underline underline-offset-4 decoration-[#1f2328]/30 hover:decoration-[#1f2328]"
              >
                linkedin.com
              </a>
            </li>
          </ul>
        </section>

        <footer className="mt-16 pt-8 border-t border-[#e6e2d9] text-sm text-[#8a8f98]">
          © {new Date().getFullYear()} Vivienne Chow
        </footer>
      </div>
    </main>
  );
}
