import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const brands = [
        "Technogym", "Life Fitness", "Hammer Strength", "Precor", "Matrix", "Eleiko"
    ];

    const equipment = [
        {
            id: 1,
            name: "Commercial Treadmill Series X",
            category: "Cardio",
            image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            name: "Olympic Power Rack",
            category: "Strength",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            name: "Dumbbell Set (5-50kg)",
            category: "Free Weights",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 4,
            name: "Cable Crossover Machine",
            category: "Strength",
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 5,
            name: "Elliptical Cross Trainer",
            category: "Cardio",
            image: "https://images.unsplash.com/photo-1517963879466-e1b54ebd6694?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 6,
            name: "Adjustable Bench Press",
            category: "Strength",
            image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000"
                        alt="Gym Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Build Your <span className="text-primary">Dream Facility</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Premium gym equipment for professional fitness centers, hotels, and corporate gyms.
                        We supply the world's leading brands to elevate your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-primary text-white hover:bg-rose-700 transition-all transform hover:scale-105">
                            Request a Quote
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-all border border-slate-700">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="py-10 border-y border-slate-800 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-8">Trusted Brands We Supply</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {brands.map((brand, index) => (
                            <span key={index} className="text-2xl md:text-3xl font-bold text-slate-300 hover:text-primary transition-colors cursor-default">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Equipment */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Equipment</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Explore our selection of high-performance machines and free weights designed for durability and biomechanics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {equipment.map((item) => (
                        <div key={item.id} className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-60"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-2 border border-primary/20">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.name}</h3>
                                <p className="text-slate-400 text-sm mb-4">Professional Grade</p>
                                <Link to="/contact" className="inline-flex items-center text-sm font-semibold text-white hover:text-primary transition-colors">
                                    Inquire for Price <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition-colors">
                        View Full Catalog
                    </Link>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Why Choose zkinvest?</h2>
                            <ul className="space-y-4">
                                {[
                                    "Official distributor for top global brands",
                                    "Full facility planning and design services",
                                    "Competitive B2B pricing and financing",
                                    "Dedicated after-sales support and maintenance"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                                        <span className="text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800"
                                alt="Gym Facility"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
