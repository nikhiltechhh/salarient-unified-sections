import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhatsAppFloat from "@/components/WhatsappFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Index;
