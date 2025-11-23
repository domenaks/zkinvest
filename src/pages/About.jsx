import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About zkinvest</h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        We are the premier partner for fitness businesses, providing world-class equipment and expertise to help you succeed.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800"
                            alt="Our Team"
                            className="rounded-2xl shadow-2xl border border-slate-800"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            Founded with a passion for fitness and engineering, zkinvest has grown to become a leading distributor of professional gym equipment. We understand that the right equipment is the foundation of any successful fitness facility.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            Our team consists of industry veterans who know exactly what gym owners need. From boutique studios to large commercial chains, we've helped hundreds of businesses build their dream spaces.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                        <Users className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-white mb-3">Client Focused</h3>
                        <p className="text-slate-400">
                            Your success is our success. We work closely with you to understand your unique needs and constraints.
                        </p>
                    </div>
                    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                        <Target className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-white mb-3">Quality First</h3>
                        <p className="text-slate-400">
                            We only supply equipment that meets the highest standards of durability, biomechanics, and safety.
                        </p>
                    </div>
                    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                        <Award className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-white mb-3">Expert Support</h3>
                        <p className="text-slate-400">
                            From initial consultation to post-installation maintenance, our team is here to support you every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
