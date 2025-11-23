import React from 'react';
import { HelpCircle, FileText, Wrench } from 'lucide-react';

const Help = () => {
    const faqs = [
        {
            question: "Do you sell to individuals?",
            answer: "We primarily focus on B2B sales to gyms, hotels, and corporate facilities. However, for large home gym projects, please contact us to discuss your needs."
        },
        {
            question: "What brands do you carry?",
            answer: "We are authorized distributors for major brands including Technogym, Life Fitness, Hammer Strength, Precor, and more."
        },
        {
            question: "Do you offer financing?",
            answer: "Yes, we offer flexible financing options for qualified businesses. Contact our sales team for more details."
        },
        {
            question: "Do you provide installation services?",
            answer: "Absolutely. Our professional installation team ensures your equipment is set up correctly and safely."
        },
        {
            question: "What is the warranty on your equipment?",
            answer: "Warranty varies by brand and product type. Generally, commercial equipment comes with comprehensive manufacturer warranties covering frame, parts, and labor."
        }
    ];

    return (
        <div className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Help Center</h1>
                    <p className="text-xl text-slate-400">
                        Find answers to common questions and support resources.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center hover:border-primary/50 transition-colors">
                        <HelpCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Sales Support</h3>
                        <p className="text-slate-400 text-sm">Get help with orders and quotes</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center hover:border-primary/50 transition-colors">
                        <Wrench className="h-8 w-8 text-primary mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Service & Repair</h3>
                        <p className="text-slate-400 text-sm">Schedule maintenance</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center hover:border-primary/50 transition-colors">
                        <FileText className="h-8 w-8 text-primary mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Manuals</h3>
                        <p className="text-slate-400 text-sm">Download product guides</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
                            <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                            <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Help;
