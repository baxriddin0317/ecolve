
import { CallToAction, Hero, InfiniteCards } from "@/components";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar /> 
      <main>
        <Hero />
        <CallToAction />
        <InfiniteCards />
      </main>
    </>
  );
}
