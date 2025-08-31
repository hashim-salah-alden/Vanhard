import Footer from "@/src/components/site-footer";
import AboutHero from "@/src/components/about-hero";
import CompanyStats from "@/src/components/company-stats";
import ValuesGrid from "@/src/components/values-grid";
import LeadershipGrid from "@/src/components/leadership-grid";
import AboutTimeline from "@/src/components/about-timeline";
import CultureCta from "@/src/components/culture-cta";

export default function AboutPage() {
  return (
    <main className="min-h-screen  text-gray-900">
      <AboutHero />
      <CompanyStats />
      <ValuesGrid />
      <LeadershipGrid />
      <AboutTimeline />
      <CultureCta />
    </main>
  );
}
