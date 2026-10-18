import AboutStory from "@/components/home/AboutStory";
import CollectionStage from "@/components/home/CollectionStage";
import Lookbook from "@/components/home/Lookbook";
import LoyaltyBenefits from "@/components/home/LoyaltyBenefits";
import PopularJewelry from "@/components/home/PopularJewelry";
import SiteFooter from "@/components/home/SiteFooter";
import Testimonials from "@/components/home/Testimonials";

export default function HomeContent() {
  return (
    <div className="bg-[var(--color-ivory)] text-[var(--color-charcoal)]">
      <CollectionStage />

      <div className="flex flex-col lg:h-svh lg:max-h-svh lg:overflow-hidden">
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
