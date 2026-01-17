import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-base-100 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-500 mb-4">About PawMart</h1>
                    <p className="text-lg text-gray-600">
                        Your one-stop destination for all things pets. We connect loving homes with furry friends.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop" 
                            alt="Happy Pets" 
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Our Mission</h2>
                        <p className="text-gray-600">
                            At PawMart, we believe every pet deserves a happy home. Whether you are looking to adopt, 
                            buy high-quality supplies, or list a pet for adoption, we provide a safe and 
                            transparent platform for pet lovers everywhere.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Verified listings for pet safety.</li>
                            <li>Community of passionate animal lovers.</li>
                            <li>Premium supplies for your companions.</li>
                        </ul>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 stats shadow w-full bg-primary text-primary-content">
                    <div className="stat place-items-center">
                        <div className="stat-title text-white">Happy Adoptions</div>
                        <div className="stat-value text-white">2.5K+</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title text-white">Pet Supplies</div>
                        <div className="stat-value text-white">1.2K+</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title text-white">Community Members</div>
                        <div className="stat-value text-white">10K+</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;