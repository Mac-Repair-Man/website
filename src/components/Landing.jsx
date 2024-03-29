// Landing.jsx
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import "../styles/Landing.css";

const titles = [
  "Get Your Mac Fixed Fast & Reliable",
  "Quality Mac Repair Solutions",
  "Trusted by Thousands of Satisfied Customers",
  "Fast & Efficient Mac Repairs",
  "Expert Mac Repair Services",
  "Reliable Mac Support for Your Needs",
  "Affordable Mac Repair Solutions",
  "Mac Troubleshooting and Fixes",
  "Quick and Professional Mac Repairs",
  "Mac Service You Can Rely On",
  "Mac Repair Experts at Your Service",
  "Fast Turnaround Mac Repairs",
  "Premium Mac Repair Services",
  "Comprehensive Mac Diagnosis and Fixes",
  "Top-notch Mac Repair Specialists",
  "Efficient Solutions for Mac Issues",
  "Your Trusted Mac Repair Partner",
  "Mac Repair Made Simple and Easy",
  "Mac Performance Optimization Services",
  "Quality Parts for Mac Repairs",
];

const Landing = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * titles.length);
    setTitle(titles[randomIndex]);
  }, []);

  return (
    <section id="home" className="home-area hero-equal-height section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-12">
              <div className="home-content z-index position-relative">
                <h3>Welcome to Mac Repair Man</h3>
                <h1 id="dynamic-h1">{title}</h1>
                <p>Trusted by Thousands of Satisfied Customers</p>
                <div className="home-button-box">
                  <a href="tel:5195050058" className="button home-btn-2">Call Now: (519) 505-0058</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;