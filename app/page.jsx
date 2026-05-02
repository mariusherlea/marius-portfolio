import About from "@/components/About";
import Hero from "@/components/Hero";

import Work from "@/components/Work";
import Reviews from "@/components/Reviews";


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
