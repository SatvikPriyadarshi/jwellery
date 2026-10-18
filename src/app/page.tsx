import Hero from "@/components/hero/Hero";
import HomeContent from "@/components/home/HomeContent";
import SiteNav from "@/components/nav/SiteNav";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <SiteNav />
        <Hero />
      </div>
      <HomeContent />
    </main>
  );
}
