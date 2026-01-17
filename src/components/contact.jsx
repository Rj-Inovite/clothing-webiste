import React, { useEffect, useState } from 'react';
import './contact.css';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa';

const Contact = () => {
    // State for Feedback Form
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedbackText, setFeedbackText] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Scroll Animation Observer
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate').forEach(el => observer.observe(el));
    }, []);

    const whatsappLink = "https://wa.me/919838813780";

    // Handle Review Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0) {
            alert("Please select a star rating.");
            return;
        }
        // Here you would typically send data to a backend
        console.log({ rating, feedbackText });
        setIsSubmitted(true);
    };

    return (
        <div className="contact-wrapper">
            {/* Background Decorative Watermark */}
            <div className="bg-decoration">R</div>

            {/* --- HERO SECTION --- */}
            <section className="contact-visual">
                <div className="visual-text">
                    <span className="subtitle animate">ESTABLISHED IN GORAKHPUR</span>
                    <h1 className="animate">Radhika Collection</h1>
                    <p className="animate">Crafting timeless stories through thread and tradition.</p>
                </div>
            </section>

            {/* --- FULL WIDTH SPLIT LAYOUT (Info & Map) --- */}
            <div className="full-width-container">
                <div className="split-layout">
                    
                    {/* Left: Boutique Details */}
                    <div className="details-panel animate">
                        <div className="inner-border">
                            <h2>Visit the Boutique</h2>
                            
                            <div className="info-block">
                                <FaMapMarkerAlt className="m-icon" />
                                <div>
                                    <h4>Address</h4>
                                    <p>Golghar Cinema Road, Near India Sports</p>
                                    <p>Gorakhpur, UP 273001</p>
                                </div>
                            </div>

                            <div className="info-block">
                                <FaClock className="m-icon" />
                                <div>
                                    <h4>Boutique Hours</h4>
                                    <p>Mon - Sat: 10:30 AM — 08:30 PM</p>
                                    <p className="highlight">Sunday: 11:00 AM — 9:00 PM</p>
                                </div>
                            </div>

                            <div className="social-tray">
                                <a href={whatsappLink} target="_blank" rel="noreferrer" className="social-link">
                                    <FaWhatsapp />
                                </a>
                                <a href="#" className="social-link"><FaInstagram /></a>
                                <a href="#" className="social-link"><FaFacebookF /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Interactive Map */}
                    <div className="map-panel animate">
                        <iframe 
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.433465171736!2d83.3709213150033!3d26.76214098319293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446700000001%3A0x123456789abcdef!2sGolghar%2C%20Gorakhpur!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin" 
                            width="100%" height="100%" allowFullScreen="" loading="lazy">
                        </iframe>
                        <div className="map-tag">LOCATE US</div>
                    </div>
                </div>
            </div>

            {/* --- FEEDBACK SECTION --- */}
            <div className="feedback-section">
                <div className="feedback-content animate">
                    {!isSubmitted ? (
                        <>
                            <div className="feedback-header">
                                <span className="subtitle" style={{color: 'var(--maroon)'}}>YOUR VOICE</span>
                                <h2>Share Your Experience</h2>
                                <p>Help us weave better stories.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="feedback-form">
                                <div className="star-container">
                                    {[...Array(5)].map((star, index) => {
                                        const ratingValue = index + 1;
                                        return (
                                            <label key={index}>
                                                <input 
                                                    type="radio" 
                                                    name="rating" 
                                                    value={ratingValue} 
                                                    onClick={() => setRating(ratingValue)}
                                                />
                                                <FaStar 
                                                    className="star-icon" 
                                                    color={ratingValue <= (hover || rating) ? "#d4af37" : "#ccc"} 
                                                    size={30}
                                                    onMouseEnter={() => setHover(ratingValue)}
                                                    onMouseLeave={() => setHover(0)}
                                                />
                                            </label>
                                        );
                                    })}
                                </div>

                                <textarea 
                                    className="feedback-input" 
                                    placeholder="Write your review here..." 
                                    rows="4"
                                    value={feedbackText}
                                    onChange={(e) => setFeedbackText(e.target.value)}
                                ></textarea>

                                <button type="submit" className="submit-btn">SUBMIT REVIEW</button>
                            </form>
                        </>
                    ) : (
                        <div className="thank-you-message reveal">
                            <div className="check-icon">✓</div>
                            <h2>Thank You for your response</h2>
                            <p>We truly appreciate your visit to Radhika Collection.</p>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default Contact;