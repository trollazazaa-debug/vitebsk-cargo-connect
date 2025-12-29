import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Fleet from "@/components/Fleet";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Грузоперевозки в Витебске | ВитЭкспресс - Надежные перевозки по Беларуси</title>
        <meta
          name="description"
          content="Профессиональные грузоперевозки в Витебске и по Беларуси. Городские и междугородние перевозки, переезды, вывоз мусора. Низкие цены, опытные водители."
        />
        <meta name="keywords" content="грузоперевозки Витебск, перевозка грузов, переезд Витебск, грузчики Витебск, вывоз мусора" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Fleet />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Index;
