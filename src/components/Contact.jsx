// File: components/Contact.tsx

import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#010227] text-white">
      <div className="flex items-center justify-center py-20 mx-3 md:mx-8">
        <div className="w-full rounded-2xl p-8 grid md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p>We’d love to hear from you! Send us a message below.</p>

            <form className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400"
                required
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full p-3 border rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#007bff] text-white p-3 rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Office</h3>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#007bff]" />
              <span>Federal housing lugbe, Abuja.</span>
            </div>

            <a
              href="mailto:support@kyrosautomobile.com"
              className="flex items-center gap-3"
            >
              <FaEnvelope className="text-[#007bff]" />
              <span>support@kyrosautomobile.com</span>
            </a>

            {/* Social Media */}
            <div className="flex gap-4 text-white text-xl">
              <a
                href="https://instagram.com/KyrosAutomobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instagram.svg"
                  width={20}
                  height={20}
                  alt="Instagram"
                />
              </a>

              <a
                href="https://x.com/kyrosautomobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/x-twitter.svg"
                  width={20}
                  height={20}
                  alt="X (Twitter)"
                />
              </a>
            </div>

            {/* Map */}
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799141053!2d-74.25987581071007!3d40.69767006305016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUwLjYiTiA3NMKwMTUnMjQuOSJX!5e0!3m2!1sen!2sus!4v1620241184892!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
