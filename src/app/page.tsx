import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Journey } from "../components/sections/Journey";
import { Contact } from "../components/sections/Contacts";
import { Footer } from "../components/web/Footer";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto w-full px-5">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
