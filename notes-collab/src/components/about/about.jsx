import React from "react";
import "./About.css";
import Navbar from "../navbar/Navbar";

const About = () => {
  return (
<>
    <Navbar/>
    <div className="about-container">
        
      <h1 className="about-title">About Us | Studify</h1>
      <p className="about-subtitle">Empowering Students Through Knowledge Sharing and Collaboration</p>
      
      <p className="about-description">
        At <span className="highlight">Studify</span>, we are passionate about transforming how students learn and grow academically. Founded with a mission to make education more accessible and collaborative, Studify aims to bridge the gap between traditional learning and modern digital solutions. Our platform is specifically tailored for engineering students, providing a centralized hub for sharing and accessing valuable resources.
      </p>

      <p className="about-description">
        We understand the challenges that students face in their academic journey — from managing a heavy workload to finding reliable study materials. That’s where <span className="highlight">Studify</span> comes in. We offer a space where students can connect, collaborate, and succeed together. Our belief is simple: knowledge is meant to be shared, and when students help each other, everyone benefits.
      </p>

      <h2 className="section-title">Our Mission</h2>
      <p className="about-description">
        Our mission is to empower students by providing them with the tools they need to succeed. We believe in a world where education is not limited by physical boundaries, and every student has access to high-quality learning materials. Through our platform, we strive to promote collaborative learning, foster a sense of community, and encourage academic growth.
      </p>

      <h2 className="section-title">What Makes Us Different?</h2>
      <p className="about-description">
        Unlike other platforms, <span className="highlight">Studify</span> is entirely student-driven. The content you find here is created and shared by students just like you. This peer-to-peer approach ensures that the resources are relevant, up-to-date, and practical. Whether you're looking for notes on core subjects, project ideas, or exam preparation tips, you'll find it all here — contributed by students from various branches and semesters.
      </p>

      <h2 className="section-title">Our Key Features</h2>
      <ul className="about-list">
        <li><b>Upload and Share Notes:</b> Share your own notes and access notes from others to enrich your understanding of key topics.</li>
        <li><b>Organized Content:</b> Easily navigate through notes categorized by branch and semester for quick access.</li>
        <li><b>Community Support:</b> Connect with peers, ask questions, and receive help from fellow students.</li>
        <li><b>Free and Open Access:</b> No subscription fees. Studify is completely free for all students.</li>
        <li><b>Mobile-Friendly Experience:</b> Access notes anytime, anywhere from your phone or tablet.</li>
      </ul>

      <h2 className="section-title">Why Join Studify?</h2>
      <p className="about-description">
        Studify is more than just a platform for sharing notes — it's a community. By joining, you become part of a network of motivated, like-minded students who are eager to help each other succeed. Whether you're struggling with a particular subject or just looking for some extra study materials, Studify has you covered.
      </p>

      <h2 className="section-title">Our Vision</h2>
      <p className="about-description">
        We envision a future where students are empowered to take control of their learning journeys. Our goal is to create a global community of learners who are not bound by geographical or institutional limitations. By promoting open access to educational resources and encouraging collaborative learning, we aim to make education a shared experience.
      </p>

      <h2 className="section-title">Meet the Team</h2>
      <p className="about-description">
        <span className="highlight">Studify</span> was built by a group of engineering graduates who experienced the challenges of academic life firsthand. Our team is dedicated to continuously improving the platform, adding new features, and ensuring that students have the best possible experience.
      </p>

      <h2 className="section-title">Join the Community Today!</h2>
      <p className="about-description">
        Don’t miss the opportunity to be part of a growing community of learners. Join <span className="highlight">Studify</span> today and experience a new way of learning, sharing, and succeeding.
      </p>

      <div className="contact-section">
        <h2 className="contact-title">We’d Love to Hear from You!</h2>
        <p className="contact-description">
          If you have any questions, suggestions, or feedback, feel free to reach out to us. Together, we can continue to build a stronger community and help more students thrive.
        </p>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
    </>
  );
};

export default About;
