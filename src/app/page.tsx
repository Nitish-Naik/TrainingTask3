import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Results from "./component/StatsGrad";
import WhatMakesUsDifferent from "./component/WhatMakesUsDifference";
import CallbackSection from "./component/CallbackSection";
import Footer from "./component/Footer";
import SuccessStories from "./component/SuccessStories";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Results />
      <WhatMakesUsDifferent />
      <SuccessStories />
      <CallbackSection />
      <Footer />
    </div>
  );
}
