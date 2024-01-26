import React from "react";
import { FaWrench, FaLaptopMedical, FaPhoneVolume } from "react-icons/fa";
import { motion } from "framer-motion";

// CSS Imports
import '../../index.css';
import "./Features.css";

function Features() {
  return (
    <section className="features-section pt-70 pb-50">
      <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-8"
      >
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-features-item">
              <div className="features-icon">
                <FaWrench size={40} />
              </div>
              <h3>Fast & Efficient Mac Repairs</h3>
              <p>
                Save money and time with our fast and efficient Mac repair
                services. Mac Repair Man understands the stress of Mac damages
                and offers quick solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-features-item">
              <div className="features-icon">
                <FaLaptopMedical size={40} />
              </div>
              <h3>Expert Mac Revival</h3>
              <p>
                Is your Mac damaged? Whatever the situation, Mac Repair Man can
                revive all your Mac devices, including MacBooks, MacBook Pros,
                iMacs, and Mac Minis!
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-features-item">
              <div className="features-icon">
                <FaPhoneVolume size={40} />
              </div>
              <h3>Best Price Guarantee</h3>
              <p>
                With 10 years of experience and customer satisfaction, Mac
                Repair Man ensures that you'll receive top-quality services at a
                reasonable price!
              </p>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
