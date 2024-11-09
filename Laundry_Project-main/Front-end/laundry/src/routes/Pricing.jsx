import React from "react";
import "./pricing.css";

const Pricing = () => {
    return (
        <div className="pricing-page">
            <h1>Our Pricing Plans</h1>
            <p>Choose a plan that fits your needs. We offer competitive pricing with high-quality service.</p>
            
            <div className="pricing-cards">
                <div className="pricing-card">
                    <img src="https://marketplace.canva.com/EAF_D8VrnnY/1/0/1600w/canva-blue-simple-illustration-laundry-service-logo-2fvP4gazpgs.jpg"
                         alt="Basic Plan" 
                         className="pricing-image" />
                    <h2>Basic Plan</h2>
                    <p>Ideal for individuals and small loads. Get your essentials cleaned at an affordable rate.</p>
                    <p className="price">$10 per load</p>
                </div>
                
                <div className="pricing-card">
                    <img src="https://marketplace.canva.com/EAF_D8VrnnY/1/0/1600w/canva-blue-simple-illustration-laundry-service-logo-2fvP4gazpgs.jpg"
                         alt="Standard Plan" 
                         className="pricing-image" />
                    <h2>Standard Plan</h2>
                    <p>Perfect for families. Enjoy weekly cleaning services with a slight discount.</p>
                    <p className="price">$25 per load</p>
                </div>
                
                <div className="pricing-card">
                    <img src="https://marketplace.canva.com/EAF_D8VrnnY/1/0/1600w/canva-blue-simple-illustration-laundry-service-logo-2fvP4gazpgs.jpg"
                         alt="Premium Plan" 
                         className="pricing-image" />
                    <h2>Premium Plan</h2>
                    <p>Best value for bulk loads and frequent users. Includes express services and special care.</p>
                    <p className="price">$40 per load</p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
