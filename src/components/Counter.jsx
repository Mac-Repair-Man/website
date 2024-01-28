import React, { useState, useEffect } from "react";
import "../styles/Counter.css";

function Counter() {
  // Initialize the counter value with zeros.
  const [counters, setCounters] = useState({
    years: 0,
    reviews: 0,
    macsFixed: 0,
    happyCustomers: 0,
  });

  useEffect(() => {
    animateCounter("years", 20);
    animateCounter("reviews", 300);
    animateCounter("macsFixed", 31568);
    animateCounter("happyCustomers", 29358);
  }, []);

  const animateCounter = (counterName, targetValue) => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => {
        const currentValue = prevCounters[counterName];
        const increment = Math.ceil((targetValue - currentValue) / 20);

        if (currentValue < targetValue) {
          return {
            ...prevCounters,
            [counterName]: currentValue + increment,
          };
        } else {
          clearInterval(interval);
          return prevCounters;
        }
      });
    }, 10);
  };
  

  return (
    <section
      className="counter-area section-padding"
      style={{ backgroundImage: `url('/img/counter-bg.jpg')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 counter-item">
            <div className="single-counter">
              <div className="counter-contents">
                <h2>
                  <span className="counter-number">{counters.years}</span>
                  <span>+</span>
                </h2>
                <h3 className="counter-heading">
                  Years of Mac Repair Experience
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 counter-item">
            <div className="single-counter">
              <div className="counter-contents">
                <h2>
                  <span className="counter-number">{counters.reviews}</span>
                  <span>+</span>
                </h2>
                <h3 className="counter-heading">⭐⭐⭐⭐⭐ Reviews</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 counter-item">
            <div className="single-counter">
              <div className="counter-contents">
                <h2>
                  <span className="counter-number" id="counter-daily">
                    {counters.macsFixed}
                  </span>
                  <span>+</span>
                </h2>
                <h3 className="counter-heading">Macs Repaired</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 counter-item">
            <div className="single-counter">
              <div className="counter-contents">
                <h2>
                  <span className="counter-number">
                    {counters.happyCustomers}
                  </span>
                  <span>+</span>
                </h2>
                <h3 className="counter-heading">Satisfied Customers</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;