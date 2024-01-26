import React from "react";
import { FaPhone, FaEnvelope, FaHome } from "react-icons/fa";

// CSS Imports
import '../../index.css';
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer-area">
            <div className="footer-top-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 footer-box-item">
                            <div className="footer-content">
                                <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="Brand" />
                                <p>
                                    For fast, high-quality, and affordable Mac
                                    repairs, contact Mac Repair Man.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-box-item">
                            <div className="footer-content mid-content">
                                <h3>Links</h3>
                                <ul className="footer-link">
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#contact">Contact Us</a></li>
                                    <li><a href="#terms">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-box-item">
                            <div className="footer-content">
                                <h3>Contact Us</h3>
                                <ul className="footer-link">
                                    <li>
                                        <FaPhone />
                                        <a href="tel:5195050058">(519) 505-0058</a>
                                    </li>
                                    <li>
                                        <FaEnvelope />
                                        <a href="mailto:info@macrepairman.ca">info@macrepairman.ca</a>
                                    </li>
                                    <li>
                                        <FaHome />556 King St East, Kitchener ON, Canada
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-copyright text-center">
                                <p>Mac Repair Man &copy; 2014 - 2023. All Rights Reserved.</p>
                                <p>Website Designed & Maintained by <a href="https://kaytwenty.com/">David Anton</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;