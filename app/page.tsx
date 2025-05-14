import { HeroLeads } from '@/components/landing/HeroLeads';
import { createClient } from '../utils/supabase/server';
import { Footer } from '../components/landing/Footer';
import { Navbar } from '../components/landing/Navbar';
import { About } from '../components/landing/About';
import { Cta } from '../components/landing/Cta';
import { FAQ } from '../components/landing/FAQ';
import { Newsletter } from '../components/landing/Newsletter';
import { ScrollToTop } from '../components/landing/ScrollToTop';
import { Sponsors } from '../components/landing/Sponsors';
import { Testimonials } from '../components/landing/Testimonials';

export default async function LandingPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="absolute w-full bg-background overflow-hidden touch-pan-x touch-pan-y">
        <Navbar user={user} />
        <HeroLeads />

        {/* <FAQ />
        <Sponsors />
        <About />
        <Cta />
        <Testimonials />
        <Newsletter />
        <ScrollToTop />*/}
        <Footer />
      </div>
    </>
  );
}
