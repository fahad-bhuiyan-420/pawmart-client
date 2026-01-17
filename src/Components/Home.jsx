import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import CategoryDetails from './CategoryDetails';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    

    const banners = [
        {
            title: "Adopt a Loving Pet",
            subtitle: "Give a forever home to a furry friend.",
            image: "https://img1.wsimg.com/isteam/getty/1516239450",
            path: "/products/pet",
            btn: "Adopt Now 🐶"
        },
        {
            title: "Healthy Pet Food",
            subtitle: "Nutritious meals for happy pets.",
            image: "https://bymit.co.uk/cdn/shop/articles/shutterstock_493398934-1.jpg?v=1620676259",
            path: "/products/food",
            btn: "Shop Food 🦴"
        },
        {
            title: "Pet Accessories",
            subtitle: "Comfort, style, and play — all here.",
            image: "https://static.vecteezy.com/system/resources/previews/008/159/519/large_2x/pet-care-concept-various-pet-accessories-and-tools-on-pink-background-flat-lay-photo.jpg",
            path: "/products/accessories",
            btn: "Browse Accessories 🧸"
        },
        {
            title: "Pet Care Products",
            subtitle: "Love, grooming, and daily care essentials.",
            image: "https://curebydesign.in/wp-content/uploads/2024/04/Cure-By-Design-hemp-for-Pets-1300x731.png",
            path: "/products/care",
            btn: "View Care Products 🐾"
        }
    ];

    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [banners.length]);

    const categories = [
        { name: "Pet (Adoption)", desc: "Adoption saves lives — start with one.", img: banners[0].image, path: "/products/pet", color: "bg-orange-100" },
        { name: "Pet Food", desc: "Feed them love, one bowl at a time.", img: banners[1].image, path: "/products/food", color: "bg-blue-100" },
        { name: "Accessories", desc: "Style your pet with comfort and charm.", img: banners[2].image, path: "/products/accessories", color: "bg-pink-100" },
        { name: "Pet Care", desc: "Love them, groom them, care for them.", img: banners[3].image, path: "/products/care", color: "bg-green-100" }
    ];

    return (
        <div className='max-w-7xl mx-auto px-4 py-8 bg-base-100'>

            {/* ===== Premium Hero Slider ===== */}
            <div className="relative w-full h-[550px] rounded-[32px] overflow-hidden shadow-2xl group">
                <img
                    src={banners[current].image}
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>

                <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 text-white">
                    <span className="bg-orange-500 text-xs font-bold uppercase tracking-widest w-fit px-3 py-1 rounded-full mb-4 animate-bounce">
                        PawMart Exclusive
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-lg">
                        {banners[current].title.split(" ").map((word, i) => 
                            i === 2 ? <span key={i} className="text-orange-400">{word} </span> : word + " "
                        )}
                    </h1>
                    <p className="mt-4 text-xl text-gray-200 max-w-xl font-medium">
                        {banners[current].subtitle}
                    </p>
                    <button
                        onClick={() => navigate(banners[current].path)}
                        className="mt-8 w-fit btn btn-lg bg-orange-500 hover:bg-white hover:text-orange-600 border-none text-white rounded-full px-10 transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                        {banners[current].btn}
                    </button>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-8 right-12 flex gap-3 z-10">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${index === current ? "bg-orange-500 w-12" : "bg-white/40 w-4 hover:bg-white"}`}
                        />
                    ))}
                </div>
            </div>

            {/* ===== Modern Categories Section ===== */}
            <section className="mt-24">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className='text-5xl font-black text-gray-800 italic'>Explore Categories</h2>
                        <div className="h-1.5 w-32 bg-orange-500 rounded-full mt-2"></div>
                    </div>
                    <p className="text-gray-500 max-w-xs text-right hidden md:block">Quality assured products for your best friends.</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {categories.map((cat, idx) => (
                        <div 
                            key={idx}
                            onClick={() => navigate(cat.path)} 
                            className="group cursor-pointer relative bg-white rounded-3xl p-4 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100"
                        >
                            <div className={`overflow-hidden rounded-2xl h-64 mb-6 ${cat.color}`}>
                                <img
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-125'
                                    src={cat.img}
                                    alt={cat.name} 
                                />
                            </div>
                            <div className="px-2 pb-2">
                                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                                    {cat.name}
                                </h2>
                                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                                    {cat.desc}
                                </p>
                                <div className="mt-4 flex items-center text-orange-500 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    Browse Now →
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== Recent Listings Section ===== */}
            <section className="mt-28 mb-20">
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Fresh Arrivals</span>
                    <h3 className='text-5xl font-black text-gray-800 mt-2'>Recent Listings</h3>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {data.map(product => (
                        <div key={product._id} className="hover:scale-[1.02] transition-transform duration-300">
                            <CategoryDetails product={product} />
                        </div>
                    ))}
                </div>
                
                <div className="flex justify-center mt-12">
                    <button 
                        onClick={() => navigate('/products')}
                        className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-orange-500 rounded-full px-12"
                    >
                        View All Products
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Home;