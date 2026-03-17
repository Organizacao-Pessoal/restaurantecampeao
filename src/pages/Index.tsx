import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollAnimator from "@/components/ScrollAnimator";

const Index = () => (
  <>
    <Header />
    <Hero />
    <ScrollAnimator>
      <Highlights />
    </ScrollAnimator>
    <ScrollAnimator>
      <About />
    </ScrollAnimator>
    <ScrollAnimator>
      <Gallery />
    </ScrollAnimator>
    <ScrollAnimator>
      <Reviews />
    </ScrollAnimator>
    <ScrollAnimator>
      <Contact />
    </ScrollAnimator>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
