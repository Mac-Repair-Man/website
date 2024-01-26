import React from "react";
import '../../index.css';
import "./Repairs.css";

function Repair() {
    return (
        <section id="repairs" className="repairs-area pt-100 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="repairs-content">
                            <div className="repairs-content-info">
                                <h2>We Can Fix it All!</h2>
                                <p>We offer hassle-free quick repair services
                                    for all types of Macs! With extensive
                                    experience in repairing Macs as well as
                                    consistently positive customer experiences,
                                    we guarantee easy and high-quality repair
                                    services. In addition to Mac repairs, we
                                    also buy damaged devices.
                                </p>
                                <br />
                                <p>Repairs / Upgrades that we offer:</p>
                            </div>
                            <div className="repairs-content-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <ul>
                                            <li>Water/Liquid Damage</li>
                                            <li>Physical Damage</li>
                                            <li>Data Recovery</li>
                                            <li>Screen Damage</li>
                                            <li>WiFi/ Bluetooth</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <ul>
                                            <li>Battery Replacement</li>
                                            <li>Charging Port</li>
                                            <li>Slow Performance</li>
                                            <li>Damaged Case</li>
                                            <li>Upgrade Performance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="repairs-content-images">
                            <img src={process.env.PUBLIC_URL + "/img/repairs.jpg"} alt="Repair images" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Repair;