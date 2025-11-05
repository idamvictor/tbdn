"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can donate blood?",
    answer:
      "Generally, healthy individuals aged 18-65yrs, according to the WHO but because of peculiarities with the elderly in Nigeria and Sub Saharan Africa, we peg it at 18 - 55yrs, weighing at least 50kg, feeling well, no blood cancers or infections or high risk sexual exposures in the last 12 months, no tattoos in the last 6 months, not pregnant, menstruating or recently menstruated in the last 2 weeks, can donate blood. However, specific eligibility criteria may vary based on health conditions, medications, and recent travel history.",
  },
  {
    question: "How often can I donate blood?",
    answer:
      "You can donate whole blood every 8 weeks (56 days). For other types of donations like platelets, the frequency may be different. Our system will track your donation history and notify you when you're eligible to donate again.",
  },
  {
    question: "Is blood donation safe?",
    answer:
      "Yes, blood donation is completely safe. We use sterile, single-use equipment for each donor. All equipment is disposed of after use, eliminating any risk of infection transmission.",
  },
  {
    question: "How long does the donation process take?",
    answer:
      "The entire process typically takes 60 - 180 minutes, including registration, health screening, the actual donation (8-15 minutes), and post-donation rest period.",
  },
  {
    question: "What should I do before donating?",
    answer:
      "Get a good night's sleep, eat a healthy meal, drink plenty of water, and bring a valid ID. Avoid alcohol for 24 hours before donation and avoid fatty foods on the day of donation.",
  },
  {
    question: "What happens to my blood after donation?",
    answer:
      "Your blood is tested for safety, processed into different components (red cells, plasma, platelets), and distributed to hospitals where patients need transfusions.",
  },
  {
    question: "Can I donate if I'm taking medication?",
    answer:
      "It depends on the medication. Some medications may temporarily defer your donation, while others don't affect eligibility. Please inform our medical staff about any medications you're taking.",
  },
  {
    question: "Will I feel weak after donating?",
    answer:
      "Most donors feel fine after donation. You may experience mild fatigue, which is normal. Refreshments (a drink, food, snacks, fruits) are essential after donating. We also recommend rest and avoiding strenuous activities for the rest of the day.",
  },
];

export function FAQSection() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about blood donation.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
