import React, { useState } from "react"; 
import type { ChangeEvent, FormEvent } from "react"; 
import emailjs from "@emailjs/browser"; 
import phoneImage from "/img/phone-image.jpeg"; 
import contactImage from "/img/contact.webp"; 
import SEO from "../components/seo"; 

interface FormData { 
  name: string; 
  phone: string; 
  email: string; 
  message: string; 
  [key: string]: string; 
} 

export default function Contact(): React.JSX.Element { 
  const [formData, setFormData] = useState<FormData>({ 
    name: "", 
    phone: "", 
    email: "", 
    message: "" 
  }); 
  const [status, setStatus] = useState<string>(""); 

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
    const { name, value } = e.target; 
    setFormData((prev) => ({ ...prev, [name]: value })); 
  }; 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    setStatus("Sending..."); 

    try { 
      const templateParams = { 
        from_name: formData.name, 
        from_email: formData.email, 
        phone_number: formData.phone, 
        message: formData.message, 
      }; 

      const result = await emailjs.send( 
        import.meta.env.vite_emailjs_service_id, 
        import.meta.env.vite_emailjs_template_id, 
        templateParams, 
        import.meta.env.vite_emailjs_public_key 
      ); 

      if (result.status === 200) { 
        setStatus("Message sent successfully!"); 
        setFormData({ name: "", phone: "", email: "", message: "" }); 
      } 
    } catch (error) { 
      setStatus("Failed to send message. Please try again."); 
      console.error("EmailJS Error:", error); 
    } 
  };

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with us today." />
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <div>
          <img src={contactImage} alt="Contact us" style={{ width: "100%", maxWidth: "300px" }} />
          <img src={phoneImage} alt="Phone" style={{ width: "100%", maxWidth: "300px", marginTop: "10px" }} />
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", maxWidth: "400px" }}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ width: "100%" }} />
          </div>
          
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: "100%" }} />
          </div>
          
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%" }} />
          </div>
          
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} style={{ width: "100%" }} />
          </div>
          
          <button type="submit">Submit</button>
          
          {status && <p>{status}</p>}
        </form>
      </div>
    </>
  );
}
