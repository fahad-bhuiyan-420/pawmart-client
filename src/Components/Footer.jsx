import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram, FaPaw } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-200 pt-10 border-t border-orange-100">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 pb-10">
                
                {/* Brand Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <FaPaw className="text-2xl text-orange-500" />
                        <span className="text-2xl font-bold text-orange-500">PawMart</span>
                    </div>
                    <p className="text-gray-600">
                        Connecting loving homes with happy paws since 2024. Your trusted partner for pets and quality supplies.
                    </p>
                    <div className="flex gap-4 text-orange-500">
                        <a href="#" className="hover:text-orange-600 transition-colors"><FaFacebookF /></a>
                        <a href="#" className="hover:text-orange-600 transition-colors"><FaTwitter /></a>
                        <a href="#" className="hover:text-orange-600 transition-colors"><FaInstagram /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="footer-title opacity-100 text-orange-500 mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="link link-hover">Home</Link></li>
                        <li><Link to="/about" className="link link-hover">About Us</Link></li>
                        <li><Link to="/products" className="link link-hover">Pets & Supplies</Link></li>
                        <li><Link to="/contact" className="link link-hover">Contact</Link></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="footer-title opacity-100 text-orange-500 mb-4">Categories</h3>
                    <ul className="space-y-2">
                        <li><Link to="/products/dogs" className="link link-hover">Dogs & Puppies</Link></li>
                        <li><Link to="/products/cats" className="link link-hover">Cats & Kittens</Link></li>
                        <li><Link to="/products/food" className="link link-hover">Pet Food</Link></li>
                        <li><Link to="/products/toys" className="link link-hover">Toys & Care</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}

            </div>

            {/* Bottom Bar */}
            <div className="footer footer-center p-4 bg-orange-500 text-white font-medium">
                <div>
                    <p>© {new Date().getFullYear()} PawMart Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;