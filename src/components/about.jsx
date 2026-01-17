import React from 'react';
import { motion } from 'framer-motion';
import './about.css';
import mama from '../assets/images/mama.jpg';

// Animation Variants for cleaner code
const fadeInUpdate = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const About = () => {
  return (
    <div className="about-container">
      
      {/* --- Animated Hero Section --- */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Radhika
          </motion.h1>
          
          <motion.p 
            className="tagline"
            variants={fadeInUpdate}
          >
            "Weaving Tradition into Every Thread"
          </motion.p>
          
          <motion.div 
            className="divider"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 1, duration: 1 }}
          ></motion.div>
        </motion.div>
      </section>

      {/* --- Who Are We & About Us (Scroll Reveal) --- */}
      <section className="section-container split-section">
        <motion.div 
          className="text-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
        >
          <h2>Who Are We?</h2>
          <p>
            At <strong>Radhika</strong>, we are more than just a clothing brand; we are curators of culture. 
            We believe that every piece of fabric tells a story, and our mission is to bring those stories to life 
            through exquisite craftsmanship. We bridge the gap between timeless heritage and modern elegance.
          </p>
        </motion.div>

        <motion.div 
          className="text-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
        >
          <h2>About Us</h2>
          <p>
            Founded with a passion for quality and an eye for detail, Radhika has grown into a destination for 
            those who seek authentic style. We specialize in bringing you attire that makes you feel confident, 
            beautiful, and connected to your roots.
          </p>
        </motion.div>
      </section>

      {/* --- Our Journey (Fade Up) --- */}
      <motion.section 
        className="section-container journey-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpdate}
      >
        <h2>Our Journey</h2>
        <p>
          Our story began with a simple idea: to make high-quality ethnic fashion accessible and personal. 
          What started as a small passion project has blossomed into a beloved brand. Over the years, we have 
          sourced the finest fabrics, collaborated with skilled artisans, and built a community of loyal customers.
        </p>
      </motion.section>

      {/* --- Owner Spotlight: Amar Soni --- */}
      <section className="owner-section">
        <motion.div 
          className="owner-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 }
          }}
        >
          <div className="owner-image-wrapper">
            <motion.img
              src={mama}
              alt="Amar Soni - Owner"
              className="owner-img"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
          <div className="owner-details">
            <motion.h3 variants={fadeInUpdate}>Meet the Visionary</motion.h3>
            <motion.h2 variants={fadeInUpdate}>Amar Soni</motion.h2>
            <motion.p className="owner-bio" variants={fadeInUpdate}>
              The heart and soul behind Radhika, <strong>Amar Soni</strong> is driven by a singular passion: 
              to see his customers smile. With years of experience in the textile industry and an innate understanding 
              of fabric and fit, Amar has built this brand on the pillars of integrity and warmth.
            </motion.p>
            <motion.p className="owner-bio" variants={fadeInUpdate}>
              He believes that a shop owner's job isn't just to sell clothes, but to build relationships. 
              Under Amar's care, you aren't just a customer; you become family.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* --- Customer Feedback (Staggered Cards) --- */}
      <section className="section-container testimonials-section">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Customer Love
        </motion.h2>
        <motion.div 
          className="testimonials-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { name: "Priya Sharma", text: "The fabric quality is unmatched! I bought a dress for my sister's wedding and got so many compliments." },
            { name: "Neha Verma", text: "Amar ji suggested the perfect color combination for me. The service here is so personal and kind." },
            { name: "Suman Gupta", text: "Beautiful collection and reasonable prices. I love how the designs are traditional yet trendy." }
          ].map((testimonial, index) => (
            <motion.div 
              className="testimonial-card" 
              key={index}
              variants={fadeInUpdate}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(128,0,0,0.15)" }}
            >
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;