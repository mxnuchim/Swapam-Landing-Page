"use client";
import CustomerReviews from "@/components/CustomerReviews";
import FAQ from "@/components/FAQ";
import FeaturesOne from "@/components/FeaturesOne";
import FeaturesThree from "@/components/FeaturesThree";
import FeaturesTwo from "@/components/FeaturesTwo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import Card from "@/components/shared/Card";
import Sidebar from "@/components/shared/Sidebar";
import AppQRDock from "@/components/shared/ui/QRDock";
import { navLinks } from "@/data";
import { handleAdRedirect } from "@/lib/redirect";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Run the redirect logic when the component mounts
    handleAdRedirect();
  }, []);

  return (
    <main className="bg-red-500">
      <Navbar onOpenSidebar={() => setSidebarOpen(true)} />

      <Hero />
      <FeaturesOne />
      <FeaturesTwo />
      <FeaturesThree />
      <Card />
      <CustomerReviews />
      <FAQ />
      <JoinUs />
      <Footer />
      <AppQRDock />
      {/* Mobile Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        links={navLinks}
      />
    </main>
  );
}
