import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export const metadata = {
  title: "Resume | Ion-Marius Herlea",
  description:
    "Resume of Ion-Marius Herlea, Full-Stack Developer working with Next.js, React, TypeScript, Strapi, PostgreSQL, Stripe, and modern web applications.",
};

const ResumePage = () => {
  return (
    <main className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto max-w-4xl">
        <section className="mb-10 text-center xl:text-left">
          <h1 className="h1 mb-4">Resume</h1>

          <p className="subtitle max-w-3xl mx-auto xl:mx-0">
            Ion-Marius Herlea — Full-Stack Developer focused on modern SaaS,
            eCommerce, and content platforms with Next.js, React, TypeScript,
            Strapi, PostgreSQL, and Stripe.
          </p>

          <div className="flex flex-col md:flex-row gap-3 mt-6 justify-center xl:justify-start">
            <a
              href="/cv/marius-herlea-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-x-2">
                Download CV
                <Download size={18} />
              </Button>
            </a>

            <a href="mailto:mariusherlea@gmail.com">
              <Button variant="secondary" className="gap-x-2">
                Email
                <Mail size={18} />
              </Button>
            </a>

            <a
              href="https://github.com/mariusherlea"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="gap-x-2">
                GitHub
                <Github size={18} />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/mariusherlea/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="gap-x-2">
                LinkedIn
                <Linkedin size={18} />
              </Button>
            </a>
          </div>
        </section>

        <section className="space-y-10">
          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer with hands-on experience building
              production-focused applications using Next.js, React, TypeScript,
              Strapi, PostgreSQL, Prisma, Stripe, and modern UI tools. I build
              practical web applications with clean interfaces, real backend
              integrations, authentication, payments, dashboards, SEO, and
              deployment-ready architecture.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>

            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Frontend:</strong> React,
                Next.js, TypeScript, JavaScript, Tailwind CSS, HTML, CSS
              </p>
              <p>
                <strong className="text-foreground">Backend:</strong> Strapi,
                Next.js API Routes, Node.js, REST APIs
              </p>
              <p>
                <strong className="text-foreground">Database:</strong>{" "}
                PostgreSQL, Prisma, Neon
              </p>
              <p>
                <strong className="text-foreground">Payments/Auth:</strong>{" "}
                Stripe, Webhooks, NextAuth, JWT
              </p>
              <p>
                <strong className="text-foreground">Tools:</strong> Git,
                GitHub, Vercel, Render, Cloudflare, VS Code
              </p>
              <p>
                <strong className="text-foreground">Other:</strong> SEO,
                responsive design, deployment, debugging, clean UI
              </p>
            </div>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">
                  StorePulse — eCommerce Analytics SaaS
                </h3>
                <p className="text-muted-foreground mt-2">
                  SaaS dashboard built with Next.js, TypeScript, PostgreSQL,
                  Prisma, NextAuth, Recharts, and Tailwind CSS. Includes
                  authentication, revenue metrics, orders, customers, charts,
                  top products, and recent orders.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Full-Stack eCommerce Platform
                </h3>
                <p className="text-muted-foreground mt-2">
                  eCommerce application built with Next.js, Strapi, TypeScript,
                  and Stripe. Includes product pages, cart, checkout, Stripe
                  payments, webhook handling, order creation in Strapi, and
                  deployment-ready frontend/backend integration.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Blog Platform with Next.js and Strapi
                </h3>
                <p className="text-muted-foreground mt-2">
                  Content platform with Next.js, Strapi, server-side rendering,
                  pagination, SEO metadata, clean slugs, article detail pages,
                  rich text rendering, and comment moderation.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/projects">
                <Button variant="outline">View all projects</Button>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold">
                  Web Developer / Full-Stack Developer
                </h3>
                <p className="text-muted-foreground">
                  Portfolio Projects · 2024 — Present
                </p>
                <p className="text-muted-foreground mt-2">
                  Built and deployed full-stack web applications using React,
                  Next.js, TypeScript, Strapi, PostgreSQL, Prisma, Stripe, and
                  modern frontend tooling. Focused on real-world features,
                  clean UI, SEO, authentication, payments, dashboards, and
                  scalable project structure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Logistics / Forklift Operator
                </h3>
                <p className="text-muted-foreground">
                  Warehouse & logistics operations
                </p>
                <p className="text-muted-foreground mt-2">
                  Professional background in logistics, warehouse operations,
                  loading and unloading, inventory handling, packaging flow, and
                  coordination in fast-paced operational environments.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Languages</h2>
            <p className="text-muted-foreground">
              Romanian: Native · English: Professional working proficiency
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:mariusherlea@gmail.com"
                className="text-primary underline"
              >
                mariusherlea@gmail.com
              </a>
            </p>
            <p className="text-muted-foreground mt-2">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/mariusherlea/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                linkedin.com/in/mariusherlea
              </a>
            </p>
            <p className="text-muted-foreground mt-2">
              GitHub:{" "}
              <a
                href="https://github.com/mariusherlea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                github.com/mariusherlea
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ResumePage;