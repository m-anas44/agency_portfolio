import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // New state to store validation errors

  const subscribeToNewsletter = async () => {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Email is required.");
      setMessage("");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setMessage("");
      return;
    }

    setError(""); // Reset any previous error message

    try {
      const response = await fetch(import.meta.env.VITE_CORS_ORIGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Subscribed successfully!");
        setEmail(""); // Clear input after successful submission
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } else {
        setMessage(data.message || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("An error occurred. Please try again later.");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  };

  return (
    <footer className="py-12 text-white bg-secondary">
      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Left Section */}
          <div>
            <h2 className="text-lg font-bold">TechSpireX</h2>
            <p className="text-sm text-tertiary">Creative Agency</p>
            <p className="mt-4 text-base text-tertiary">
              Your partner in crafting creative and impactful web solutions.
            </p>

            <div className="flex mt-4 space-x-3">
              <Link
                to="#"
                className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded hover:bg-gray-600"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#"
                className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded hover:bg-gray-600"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="mt-4 text-base text-tertiary">
              Subscribe to our newsletter to receive updates on the latest news!
            </p>
            <div className="flex items-center mt-6">
              <input
                type="email"
                placeholder="Subscribe with us"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-gray-300 bg-gray-700 rounded-l focus:outline-none"
              />
              <button
                className="px-4 py-3 rounded-r bg-tertiary hover:bg-primary group"
                onClick={subscribeToNewsletter}
              >
                <FaPaperPlane className="text-primary group-hover:text-tertiary" />
              </button>
            </div>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}{" "}
            {/* Display error */}
            {message && <p className="mt-2 text-sm text-primary">{message}</p>}
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-bold">Contacts</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary" />
                <p className="text-base text-tertiary">
                  Contact Us: (+92) 322-5066108
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" />
                <p className="text-base text-tertiary">
                  Mail Us: trivexsolutions@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-6 mt-10 border-t border-gray-700">
          <p className="text-base text-gray-400 w-3/4">
            © 2024 All rights reserved by{" "}
            <Link to="/" className="text-primary hover:underline uppercase">
              trivexsolutions
            </Link>
          </p>
          {/* <Link to="/terms-of-service" className="text-sm text-primary underline ml-auto mr-3">
      Terms of Service
    </Link> */}
          <button
            className="flex items-center justify-center w-8 h-8 duration-200 rounded-full md:w-10 md:h-10 bg-tertiary hover:bg-primary group hover:scale-105"
            aria-label="Back to top"
            onClick={scrollToTop} // Add onClick to trigger scrollToTop
          >
            <FaChevronUp className="text-base sm:text-lg group-hover:text-tertiary text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
