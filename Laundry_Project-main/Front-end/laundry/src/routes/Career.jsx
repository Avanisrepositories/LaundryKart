import React from "react";
import './career.css';  // Make sure to import the CSS file

const Career = () => {
    return (
        <div className="career-page">
            <h1>Career Opportunities</h1>
            <p>Join our team and start a rewarding career in the laundry industry. We are looking for passionate individuals!</p>
            
            <div className="job-listings">
                <div className="job-card">
                    <h2>Full Stack Developer</h2>
                    <p>We are seeking a Full Stack Developer to join our dynamic team and help build innovative solutions for our platform.</p>
                    <a href="/apply" className="apply-button">Apply Now</a>
                </div>
                <div className="job-card">
                    <h2>Customer Support Specialist</h2>
                    <p>If you have a passion for customer service and solving problems, we want you to be part of our team.</p>
                    <a href="/apply" className="apply-button">Apply Now</a>
                </div>
            </div>
        </div>
    );
}

export default Career;
