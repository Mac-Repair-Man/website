import React from "react";
import '../../index.css';
import './Services.css';

function Services() {
    return (
        <section id="services" className="services-area section-padding bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Quick Repair Services</h2>
                            <h5>Devices We Fix:</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <a href="#contact" className="single-services-box">
                            <div className="services-img">
                                <img src={process.env.PUBLIC_URL + "/img/services/services-1.png"} alt="Service Images" />
                            </div>
                            <h3>iPhone Repairs</h3>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="#contact" className="single-services-box">
                            <div className="services-img">
                                <img src={process.env.PUBLIC_URL + "/img/services/services-2.png"} alt="Service Images" />
                            </div>
                            <h3>iMac Repairs</h3>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="#contact" className="single-services-box">
                            <div className="services-img">
                                <img src={process.env.PUBLIC_URL + "/img/services/services-3.png"} alt="Service Images" />
                            </div>
                            <h3>MacBook Repairs</h3>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="#contact" className="single-services-box">
                            <div className="services-img">
                                <img src={process.env.PUBLIC_URL + "/img/services/services-4.png"} alt="Service Images" />
                            </div>
                            <h3>iPad Repairs</h3>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="#contact" className="single-services-box">
                            <div className="services-img">
                                <img src={process.env.PUBLIC_URL + "/img/services/services-5.png"} alt="Service Images" />
                            </div>
                            <h3>Mac mini Repairs</h3>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="#contact" className="single-services-box">
                            <div className="services-img">
                                <img src={process.env.PUBLIC_URL + "/img/services/services-6.png"} alt="Service Images" />
                            </div>
                            <h3>Mac Pro Repairs</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;