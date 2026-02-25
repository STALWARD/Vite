// Contact.js
import { useState } from "react";
import phoneImage from "/img/phone-image.jpeg";
import contactImage from "/img/contact-form-image.webp";
import SEO from "../components/SEO"; // ✅ Import reusable SEO component

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div className="flex flex-col w-11/12 content-center m-auto mt-10">
      {/* ✅ Page-specific SEO using reusable component */}
      <SEO
  title="Contact Kaulbhaskar | Tantra & Astrology Guidance"
  description="Get in touch with Kaulbhaskar Guru Ji for Tantra and Astrology consultations."
  canonical="https://www.tantrasadhana.org/contact"
  breadcrumbs={[
    { name: "Home", url: "https://www.tantrasadhana.org" },
    { name: "Services", url: "https://www.tantrasadhana.org/services" },
    { name: "Contact", url: "https://www.tantrasadhana.org/contact" },
  ]}
/>


      {/* Background image and info section */}
      <div className="flexCenter max-container relative w-full">
        <img
          src={phoneImage}
          alt="telephone"
          className="w-screen h-screen object-cover object-center 2xl:rounded-s-xl"
        />

        <h1 className="absolute top-20 left-1/2 -translate-x-1/2 text-4xl text-black font-bold pageHeader">
          Contact Us
        </h1>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col lg:flex-row gap-20 text-center">
          <div>
            <h2 className="text-xl font-bold text-black">Open Hours</h2>
            <p className="text-md md:text-lg font-semibold text-red">Mon-Sat: 10.00 AM - 08.00 PM</p>
            <p className="text-md md:text-lg font-semibold text-red">Sun: 10.00 AM - 04.00 PM</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-black">Location</h2>
            <p className="text-md md:text-lg font-semibold text-red">Patna, Bihar(IN)</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-black">Contact</h2>
            <p className="text-md md:text-lg font-semibold text-red">Email: kaultantra@gmail.com</p>
            <p className="text-md md:text-lg font-semibold text-red">Tel: +91-9934418459</p>
          </div>
        </div>
      </div>

      {/* Map section */}
      <div className="flex items-center justify-center mt-10">
        <p className="text-xl md:text-2xl lg:text-4xl text-black font-bold">Our Location on Map</p>
      </div>
      <div className="flex mt-5">
        <iframe
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=C-40%20Birla%20Colony,%20Phulwarisharif+(TANTRA%20SADHANA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>

      {/* Contact Form section */}
      <div className="flex-row md:flex w-full content-center m-auto bg-gray-100 p-10 gap-10 mt-10">
        {/* Left column: text + image */}
        <div className="flex flex-col sm:w-1/2 w-full">
          <h2 className="text-2xl font-semibold mb-10">We'd love to hear from you!</h2>
          <p className="text-xl font-normal mb-2">
            Please use the contact form regarding any questions, comments or feedback!
          </p>
          <img
            src={contactImage}
            alt="contact-image"
            width={500}
            height={500}
            className="w-auto h-auto object-cover object-center 2xl:rounded-s-xl"
          />
        </div>

        {/* Right column: form */}
        <div className="flex flex-col sm:w-1/2 w-full">
          <h2 className="text-xl text-center text-black font-semibold mt-5 mb-10">Contact Form</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            {/* Name */}
            <div className="mb-5">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-black">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              />
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label htmlFor="phone" className="mb-3 block text-base font-medium text-black">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Telephone Number with Country code"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label htmlFor="email" className="mb-3 block text-base font-medium text-black">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@domain.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              />
            </div>

            {/* Message */}
            <div className="mb-5">
              <label htmlFor="message" className="mb-3 block text-base font-medium text-black">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Type your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              ></textarea>
              <label
                htmlFor="consent"
                className="flex max-w-[425px] cursor-pointer select-none pl-5 mt-2 text-sm text-gray-600"
              >
                By clicking Submit button, you consent data usage in “Form” and also consent cookie usage in browser.
              </label>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-purple-500 hover:bg-black py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
          {status && <p className="mt-4 text-black font-semibold">{status}</p>}
        </div>
      </div>
    </div>
  );
}
