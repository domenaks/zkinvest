import React from 'react';
import { ArrowRight, CheckCircle, Dumbbell, Activity, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const brands = [
        "Technogym", "Life Fitness", "Hammer Strength", "Precor", "Matrix", "Eleiko", "Rogue", "Concept2", "Onit"
    ];

    const collections = [
        {
            id: 1,
            name: "Strength",
            description: "Premium dumbbells, plates, and racks.",
            image: "/images/cat-strength.png",
            icon: <Dumbbell className="h-6 w-6" />
        },
        {
            id: 2,
            name: "Cardio",
            description: "Boxing, battle ropes, and endurance gear.",
            image: "/images/cardio-battle-ropes.jpg",
            icon: <Activity className="h-6 w-6" />
        },
        {
            id: 3,
            name: "Functional",
            description: "Rigs, sleds, and cross-training setups.",
            image: "/images/functional-rig.png",
            icon: <Box className="h-6 w-6" />
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
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark pointer-events-none"></div>
                </div>

                <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-heading">
                        Build Your <span className="text-primary">Dream Facility</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Premium gym equipment for professional fitness centers, hotels, and corporate gyms.
                        We supply the world's leading brands to elevate your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-primary text-white hover:bg-accent transition-all transform hover:scale-105 cursor-pointer relative z-30">
                            Request a Quote
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-all border border-slate-700 cursor-pointer relative z-30">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our Collections Section */}
            <section className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our collections</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Curated equipment categories to suit every training style.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {collections.map((collection) => (
                        <div key={collection.id} className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-500">
                            <img
                                src={collection.image}
                                alt={collection.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4 backdrop-blur-sm border border-primary/20">
                                    {collection.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{collection.name}</h3>
                                <p className="text-slate-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {collection.description}
                                </p>
                                <Link to="/contact" className="inline-flex items-center text-primary font-semibold hover:text-white transition-colors cursor-pointer relative z-20">
                                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Popular Brands Section */}
            <section className="py-16 bg-slate-900/30 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-10">Popular Brands We Work With</h3>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center">
                        {brands.map((brand, index) => (
                            <span key={index} className="text-xl md:text-2xl font-bold text-slate-500 hover:text-white transition-colors duration-300 cursor-default select-none">
                                {brand}
                            </span>
                        ))}
                    </div>
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
                            <div className="mt-8">
                                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-white text-dark hover:bg-slate-200 transition-colors cursor-pointer relative z-20">
                                    Get Started
                                </Link>
                            </div>
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
