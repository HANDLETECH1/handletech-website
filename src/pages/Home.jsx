import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import Hero from '../components/sections/Hero.jsx';
import TrustBar from '../components/sections/TrustBar.jsx';
import ValueProposition from '../components/sections/ValueProposition.jsx';
import HowItWorks from '../components/sections/HowItWorks.jsx';
import DashboardPreview from '../components/sections/DashboardPreview.jsx';
import Pricing from '../components/sections/Pricing.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import FAQ from '../components/sections/FAQ.jsx';
import FinalCTA from '../components/sections/FinalCTA.jsx';

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <ValueProposition />
      <HowItWorks />
      <DashboardPreview />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
