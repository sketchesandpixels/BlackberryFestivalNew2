/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EventDetails } from "./components/EventDetails";
import { PromoVideo } from "./components/PromoVideo";
import { RegistrationForm } from "./components/RegistrationForm";
import { PieContestForm } from "./components/PieContestForm";
import { Sponsors } from "./components/Sponsors";
import { ContentSections } from "./components/ContentSections";
import { Schedule } from "./components/Schedule";
import { Gallery } from "./components/Gallery";
import { NewsletterSignup } from "./components/NewsletterSignup";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-white selection:bg-purple-950 selection:text-white relative">
      <Navbar />
      <Hero />
      <EventDetails />
      <PromoVideo />
      <ContentSections />
      <Schedule />
      <Gallery />
      <PieContestForm />
      <RegistrationForm />
      <Sponsors />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
