import { createClient } from '../utils/supabase/server';
import { Footer } from '../components/landing/Footer';
import { Navbar } from '../components/landing/Navbar';
import { Newsletter } from '../components/landing/Newsletter';
import { ScrollToTop } from '../components/landing/ScrollToTop';
import { Sponsors } from '../components/landing/Sponsors';
import { Testimonials } from '../components/landing/Testimonials';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { cn } from '@/utils/cn';
import { Cta } from '@/components/landing/Cta';
import { About } from '@/components/landing/About';
import { FAQ } from '@/components/landing/FAQ';
import HeroLeads from '@/components/landing/HeroLeads';

export default async function LandingPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="bg-background w-full cursor-yellow overflow-hidden touch-pan-x touch-pan-y">
        <div className="sticky top-0 z-50 w-full">
          <Navbar user={user} />
        </div>
        <HeroLeads />
        <Testimonials />
        <FAQ />
        <Newsletter />
        {/* 
        
     
      
     
     
        <ScrollToTop />*/}
        <div className="bg-transparent  w-full z-50 absolute">
          <Footer />
        </div>
      </div>
    </>
  );
}
