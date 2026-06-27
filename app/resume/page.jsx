import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export const metadata = {
  title: "Resume | Marius Herlea",
  description:
    "Resume of Marius Herlea, Full-Stack & Mobile Developer specializing in React, Next.js, React Native, TypeScript, PostgreSQL, Strapi, Prisma, and modern web technologies.",
};

const ResumePage = () => {
  return (
    <main className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto max-w-4xl">
        <section className="mb-10 text-center xl:text-left">
          <h1 className="h1 mb-4">Resume</h1>

          <p className="subtitle max-w-3xl mx-auto xl:mx-0">
            Marius Herlea — Full-Stack Developer focused on modern SaaS,
            eCommerce, and content platforms with Next.js, React, TypeScript,
            Strapi, PostgreSQL, and Stripe.
          </p>

          <div className="flex flex-col md:flex-row gap-3 mt-6 justify-center xl:justify-start">
            <a
              href="/cv.pdf"
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
  Full-Stack & Mobile Developer with hands-on experience building
  production-style web and mobile applications using React, Next.js,
  React Native, TypeScript, Strapi, PostgreSQL, Prisma, and modern cloud
  technologies. Passionate about transforming ideas into scalable products
  through clean architecture, reusable components, intuitive user
  experiences, and performance-focused development.
</p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>

            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
  <p>
    <strong className="text-foreground">Frontend: </strong>
     React, Next.js, TypeScript, JavaScript, Tailwind CSS
  </p>

  <p>
    <strong className="text-foreground">Mobile: </strong>
     React Native, Expo, Google Maps API
  </p>

  <p>
    <strong className="text-foreground">Backend: </strong>
     Node.js, Strapi, REST APIs, Next.js API Routes
  </p>

  <p>
    <strong className="text-foreground">Database: </strong>
     PostgreSQL, Prisma, SQLite, Neon
  </p>

  <p>
    <strong className="text-foreground">Authentication: </strong>
    NextAuth, Clerk, JWT
  </p>

  <p>
    <strong className="text-foreground">Payments: </strong>
    Stripe, Webhooks
  </p>

  <p>
    <strong className="text-foreground">Deployment: </strong>
    Vercel, Render, Cloudflare
  </p>

  <p>
    <strong className="text-foreground">Tools: </strong>
    Git, GitHub, VS Code
  </p>
</div>
          </div>

<div className="rounded-2xl border p-6 shadow-sm">
  <h2 className="text-2xl font-bold mb-4">Core Technologies</h2>

  <div className="flex flex-wrap gap-3">
    {[
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Strapi",
      "Stripe",
      "Google Maps",
      "Tailwind CSS",
      "REST APIs",
      "Git",
    ].map((tech) => (
      <span
        key={tech}
        className="rounded-full border px-4 py-2 text-sm font-medium"
      >
        {tech}
      </span>
    ))}
  </div>
</div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">
                  TruckMate — Smart Navigation & POI Platform for Professional Drivers
                </h3>
                <p className="text-muted-foreground mt-2">
                  Cross-platform mobile application designed for professional truck
  drivers to discover truck parking, fuel stations, restaurants,
  showers, repair services, and logistics facilities using Google Maps,
  intelligent marker clustering, geolocation, and route-aware
  navigation. Built with React Native, Expo, TypeScript, and Google Maps.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  StorePulse — eCommerce Analytics SaaS
                </h3>
                <p className="text-muted-foreground mt-2">
                 Production-style SaaS analytics platform built with Next.js,
  TypeScript, PostgreSQL, Prisma, NextAuth, Recharts, and Tailwind CSS.
  Features interactive dashboards, KPI tracking, customer insights,
  revenue analytics, secure authentication, and responsive data
  visualization.
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
                   Designed, built, and deployed multiple production-style web and mobile
  applications using React, Next.js, React Native, TypeScript, Strapi,
  PostgreSQL, Prisma, and Stripe. Focused on scalable architecture,
  authentication, dashboards, SEO, responsive interfaces, API
  integrations, and real-world software solutions.
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