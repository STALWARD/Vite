// src/components/FAQ.jsx
import { useState } from "react";

const faqs = [
  {
    question: "Who we are ?",
    answer: "We are the team of experts in Tantra & Astrology.\nAll experts in Tantra are from renowned lineage.\nAstro team have also expertise in the subject.\nAnd MORE our mentor and GURU Sri KAULBHASKAR Ji belongs to the lineage of famous siddha yogi Sri MATSYENDRA NATH Ji."
  },
  {
    question: "What services we provide ?",
    answer: "• TANTRA: Teaching of tantra, Various type of Tantra Puja & Ritual\n• ASTROLOGY: Teaching and Consultation\n• Gems, Talisman, Rosary of Rudraksh/Sfatik/Pearl\n• Worship yantra- Meru & Kurma type etc."
  },
  {
    question: "What is the charges, if any ?",
    answer: "• Lalita Sahastranamavali Archanam: Rupees 50,000/=\n• ASTROLOGY CONSULTATION: Rupees 5,000/=\n• Maha Viprita Pratyangira: Rupees 70,000/=\n• Maha Mrityunjaya: Rupees 90,000/=\n• BAGLAMUKHI: Rupees 1,20,000/=\n• Maha Vidya Havan: Rupees 40,000/=\n• Shat Chandi: Rupees 2,50,000/=\n• Contact us for other services not mentioned here."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: "100%", minHeight: "100vh", backgroundColor: "black", textAlign: "center" }}>
      <h2 className="special-font uppercase font-zentry text-blue-50 text-2xl sm:right-10 sm:text-3xl md:text-5xl lg:text-7xl pt-10">frequently asked questions !</h2>
      <p className="my-10 text-lg text-blue-50">
        Who we are ? <br />
        What services we provide ? <br />
        Are our services chargable ? <br />
        - Answer to the such questions are here.
      </p>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <button
            onClick={() => toggleFAQ(index)}
            style={{
              width: "100%",
              textAlign: "center",
              padding: "0.75rem",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              background: "#FBF5DF",
              border: "none",
              borderRadius: "4px"
            }}
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <div style={{ padding: "0.75rem", background: "#fafafa", borderRadius: "4px", textAlign: "center" }}>
              {faq.answer.split("\n").map((line, i) => (
                <p key={i} style={{ margin: "0.25rem 0" }}>
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
