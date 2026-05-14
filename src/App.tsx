/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EventDetails } from "./components/EventDetails";
import { HotelInfo } from "./components/HotelInfo";
import { PromoVideo } from "./components/PromoVideo";
import { RegistrationForm } from "./components/RegistrationForm";
import { PieContestForm } from "./components/PieContestForm";
import { Sponsors } from "./components/Sponsors";
import { ContentSections } from "./components/ContentSections";
import { Schedule } from "./components/Schedule";
import { Gallery } from "./components/Gallery";
import { NewsletterSignup } from "./components/NewsletterSignup";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";
import { PrivacyModal } from "./components/PrivacyModal";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white selection:bg-purple-950 selection:text-white relative font-sans">
      <Navbar />
      <Hero />
      <EventDetails />
      <HotelInfo />
      <PromoVideo />
      <ContentSections />
      <Schedule />
      <Gallery />
      <PieContestForm />
      <RegistrationForm />
      <Sponsors />
      <NewsletterSignup />
      <Footer 
        onOpenContact={() => setIsContactOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </main>
  );
}
