//app/page.jsx
import About from "@/components/About";
import Hero from "@/components/Hero";

import Work from "@/components/Work";
import Reviews from "@/components/Reviews";

export const metadata = {
  title: "Marius Herlea | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, Strapi and eCommerce applications. Portfolio featuring StorePulse SaaS analytics, blog platforms and Stripe integrations.",

  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      {/* <Services /> */}
      <Reviews />
      {/* <Cta /> */}
    </main>
  );
}
