import CTASection from "./UI/cta_section/cta_section";
import CustomerStoriesSection from "./UI/customer_stories/customer_stories";
import EnergySavingsCalculator from "./UI/energy_savings/energy_savings";
import Footer from "./UI/footer/footer";
import HeroSection from "./UI/hero/hero";
import Navbar from "./UI/navbar/navbar";
import SolutionsSection from "./UI/solutions/solutions";
import TrustSafetySection from "./UI/trust_and_safety/trust_and_safety";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        {/* page hero */}
        <HeroSection />
        {/* solutions section */}
        <SolutionsSection />
        {/* why trust in us */}
        <TrustSafetySection />
        {/* testimonials */}
        <CustomerStoriesSection />
        {/* CTA section */}
        <CTASection />
      </main>
      {/* page footer */}
      <Footer />
    </div>
  );
}
