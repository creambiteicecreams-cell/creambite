"use client";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Specials from "./components/Specials";
import SugarFree from "./components/SugarFree";
import MenuSection from "./components/MenuSection";
import WhyChoose from "./components/WhyChoose";
import Gallery from "./components/Gallery";
import VisitShop from "./components/VisitShop";
import Map from "./components/Map";
import FloatingCart from "./components/FloatingCart";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />

      <main className="pt-24 bg-gradient-to-br from-[#FFF8F2] via-[#FFF4EB] to-[#FBE7D8]">

        {/* Hero */}
        <section id="home">
          <Hero />
        </section>
      <MenuSection />
       
       {/* Sugar Free */}
        <section id="sugarfree">
          <SugarFree />
        </section>
       
        {/* Specials */}
        <section id="specials">
          <Specials />
        </section>
    
               {/* Why Choose */}
        <section id="why">
          <WhyChoose />
        </section>

        {/* Gallery */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* Visit Shop */}
        <section id="visit">
          <VisitShop />
        </section>

        {/* Map */}
        <Map />

        {/* Floating Cart */}
        <FloatingCart />

        {/* Reviews */}
        <section id="reviews">
          <Reviews />
        </section>
        

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </main>
    </>
  );
}