import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-slate-800 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <Dumbbell className="h-6 w-6 text-primary" />
                            <span className="text-lg font-bold text-white">zkinvest</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Premium gym equipment for businesses. Elevate your fitness facility with our top-tier selection.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-slate-400 hover:text-primary text-sm transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-slate-400 hover:text-primary text-sm transition-colors">About Us</Link></li>
                            <li><Link to="/help" className="text-slate-400 hover:text-primary text-sm transition-colors">Help & FAQ</Link></li>
                            <li><Link to="/contact" className="text-slate-400 hover:text-primary text-sm transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li><span className="text-slate-400 text-sm">Cardio Equipment</span></li>
                            <li><span className="text-slate-400 text-sm">Strength Training</span></li>
                            <li><span className="text-slate-400 text-sm">Free Weights</span></li>
                            <li><span className="text-slate-400 text-sm">Accessories</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:sabine@zkinvest.lv" className="text-slate-400 hover:text-primary text-sm transition-colors">
                                    sabine@zkinvest.lv
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <div className="text-slate-400 text-sm">
                                    <p>Rīga, Malkas iela 17, LV-1063</p>
                                    <p className="mt-1">Reg.nr. 40203254688</p>
                                    <p>VAT nr. LV40203254688</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} zkinvest. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-slate-500 text-sm hover:text-slate-300 cursor-pointer">Privacy Policy</span>
                        <span className="text-slate-500 text-sm hover:text-slate-300 cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
