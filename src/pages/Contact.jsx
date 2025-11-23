import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Inquiry from ${formData.name} - ${formData.company}`;
        const body = `Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:sabine@zkinvest.lv?subject=${subject}&body=${body}`;
    };

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                            Ready to upgrade your facility? Contact us for a personalized quote or consultation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                                    <p className="text-slate-400 mb-1">For all inquiries:</p>
                                    <a href="mailto:sabine@zkinvest.lv" className="text-primary hover:text-rose-400 font-medium">
                                        sabine@zkinvest.lv
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                                    <p className="text-slate-400">
                                        Riga, Latvia<br />
                                        (By appointment only)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                                    <p className="text-slate-400">
                                        Mon-Fri from 9am to 5pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-dark border border-slate-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    required
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-dark border border-slate-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Fitness World Ltd."
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-dark border border-slate-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-dark border border-slate-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Tell us about your equipment needs..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary text-white hover:bg-rose-700 transition-all transform hover:scale-[1.02]"
                            >
                                Send Message
                                <Send className="ml-2 h-5 w-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
