import { DonorTestimonials } from "./donor-testimonials";
import { HeroSection } from "./hero-section";
import { ImpactStatistics } from "./impact-statistics";
import { LatestCampaigns } from "./latest-campaigns";
import { MissionStatement } from "./mission-statement";
// import { NewsUpdates } from "./news-updates";
// import { QuickActions } from "./quick-actions";

export default function HomeComponent() {
  return (
    <>
      <HeroSection />
      <MissionStatement />
      <ImpactStatistics />
      <LatestCampaigns />
      <DonorTestimonials />
      {/* <QuickActions /> */}
      {/* <NewsUpdates /> */}
    </>
  );
}
