import { BackgroundFX } from './components/BackgroundFX';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { AudienceCards } from './components/AudienceCards';
import { OpportunityScanner } from './components/OpportunityScanner';
import { BeforeAfter } from './components/BeforeAfter';
import { Services } from './components/Services';
import { Philosophy } from './components/Philosophy';
import { LeadForm } from './components/LeadForm';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-void text-white">
      <BackgroundFX />
      <Navbar />
      <Hero />
      <ProblemSection />
      <AudienceCards />
      <OpportunityScanner />
      <BeforeAfter />
      <Services />
      <Philosophy />
      <LeadForm />
      <FinalCTA />
    </main>
  );
}
