import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import "./index.css";


// Components
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Repairs from "./components/Repairs/Repairs";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      {/* Search Engine Optimization */}
      <title>Mac Repair Services in Kitchener-Waterloo | Mac Repair Man</title>
      <meta name="description" content="Mac Repair Man is a trusted provider of fast and affordable Mac repair services in Kitchener-Waterloo, Ontario. We specialize in MacBook and iMac repairs. Contact us for reliable Mac upgrades and Apple device support." />
      <meta name="keywords" content="Mac repair, MacBook repair, iMac repair, Apple repair, Mac upgrade, Kitchener, Waterloo, Ontario" />
      <meta name="author" content="Mac Repair Man" />

      {/* Open Graph */}
      <meta property="og:title" content="Mac Repair Services in Kitchener-Waterloo | Mac Repair Man" />
      <meta property="og:description" content="Mac Repair Man is a trusted provider of fast and affordable Mac repair services in Kitchener-Waterloo, Ontario. We specialize in MacBook and iMac repairs. Contact us for reliable Mac upgrades and Apple device support." />
      <meta property="og:image" content="https://macrepairman.ca/assets/img/logo.png" />
      <meta property="og:url" content="https://macrepairman.ca" />

      {/* Twitter */}
      <meta name="twitter:title" content="Mac Repair Services in Kitchener-Waterloo | Mac Repair Man" />
      <meta name="twitter:description" content="Mac Repair Man is a trusted provider of fast and affordable Mac repair services in Kitchener-Waterloo, Ontario. We specialize in MacBook and iMac repairs. Contact us for reliable Mac upgrades and Apple device support." />
      <meta name="twitter:image" content="https://macrepairman.ca/assets/img/logo.png" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Schema.org */}
      <script type="application/ld+json">
          {`
              {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Mac Repair Man",
                  "url": "https://macrepairman.ca",
                  "logo": "https://macrepairman.ca/assets/img/logo.png",
                  "description": "Mac Repair Man is a trusted provider of fast and affordable Mac repair services in Kitchener-Waterloo, Ontario. We specialize in MacBook and iMac repairs. Contact us for reliable Mac upgrades and Apple device support.",
                  "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "556 King St East",
                      "addressLocality": "Kitchener",
                      "addressRegion": "ON",
                      "postalCode": "N2G 2L8",
                      "addressCountry": "CA"
                  },
                  "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "(519) 505-0058",
                      "email": "info@macrepairman.ca",
                      "contactType": "customer service"
                  }
              }
          `}
      </script>
    </Helmet>
    <Navbar />
    <Landing />
    <Features />
    <About />
    <Services />
    <Repairs />
    <Counter />
    {/* Contact Page */}
    <Footer />
  </React.StrictMode>
);