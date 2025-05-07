import { HeroLeads } from '@/components/landing/HeroLeads';
import { About } from '../components/landing/About';
import { Cta } from '../components/landing/Cta';
import { FAQ } from '../components/landing/FAQ';
import { Footer } from '../components/landing/Footer';
import { Hero } from '../components/landing/Hero';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Navbar } from '../components/landing/Navbar';
import { Newsletter } from '../components/landing/Newsletter';
import { Pricing } from '../components/landing/Pricing';
import { ScrollToTop } from '../components/landing/ScrollToTop';
import { Sponsors } from '../components/landing/Sponsors';
import { Testimonials } from '../components/landing/Testimonials';
import { createClient } from '../utils/supabase/server';

export default async function LandingPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="absolute w-full bg-[#0e0e0e] overflow-hidden touch-pan-x touch-pan-y">
        <Navbar user={user} />
        <HeroLeads />
        <FAQ />

        {/* <Sponsors />
        <Hero />     
        <About />
        <HowItWorks />
        <Cta />
        <Testimonials />
        <Pricing user={user} /> 
        <Newsletter />*/}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
