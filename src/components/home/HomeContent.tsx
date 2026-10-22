import AboutStory from "@/components/home/AboutStory";
import CollectionStage from "@/components/home/CollectionStage";
import Lookbook from "@/components/home/Lookbook";
import LoyaltyBenefits from "@/components/home/LoyaltyBenefits";
import PopularJewelry from "@/components/home/PopularJewelry";
import SiteFooter from "@/components/home/SiteFooter";
import Testimonials from "@/components/home/Testimonials";
import "./HomeContent.css";

export default function HomeContent() {
  return (
    <div className="bg-[var(--color-ivory)] text-[var(--color-charcoal)]">
      <CollectionStage />

      <div className="home-dual-stage flex flex-col lg:h-dvh lg:min-h-[38rem] lg:overflow-hidden">
        <LoyaltyBenefits />
        <PopularJewelry />
      </div>

      <AboutStory />

      <Testimonials />

      <Lookbook />

      <SiteFooter />
    </div>
  );
}
