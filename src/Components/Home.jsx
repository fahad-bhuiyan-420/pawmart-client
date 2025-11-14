import React from 'react';
import NavBar from './NavBar';
import { useLoaderData, useNavigate } from 'react-router';
import PetFood from './PetFood';
import CategoryDetails from './CategoryDetails';
// import { navigate } from '../navigate/navigate';

const Home = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    
    return (
        <div className='p-5'>

            <div className='Banner'>
                <h3 className='text-5xl font-bold text-center my-3'>Banner</h3>
                <div className="carousel w-full">

                    <div id="slide1" className="carousel-item relative w-full flex flex-col items-center">
                        <img
                            src="https://www.everwallpaper.co.uk/cdn/shop/products/3000_1155_562dc670-27a9-4802-9d1d-6c7d8e8e4458.jpg?v=1739778794"
                            className="w-full h-[500px] object-contain"
                        />
                        <p className="text-center text-xl font-semibold mt-4 text-gray-700">
                            “Find Your Furry Friend Today!”
                        </p>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full flex flex-col items-center">
                        <img
                            src="https://thekindpet.com/cdn/shop/articles/How_Does_Adopting_an_Animal_Help_The_Environment.png?v=1682075111&width=1500"
                            className="w-full h-[500px] object-contain"
                        />
                        <p className="text-center text-xl font-semibold mt-4 text-gray-700">
                            “Adopt, Don’t Shop — Give a Pet a Home.”
                        </p>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full flex flex-col items-center">
                        <img
                            src="https://happybreath.com/wp-content/uploads/2021/04/Dog-Owner-Happy-Breath.jpg"
                            className="w-full h-[500px] object-contain"
                        />
                        <p className="text-center text-xl font-semibold mt-4 text-gray-700">
                            “Because Every Pet Deserves Love and Care.”
                        </p>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className='text-5xl text-center font-bold mb-3 mt-15'>Categories</h3>
            <div className='cards grid grid-cols-4 gap-4 my-10'>
                <div onClick={() => navigate('/products/pet')} className="card bg-base-100 w-full shadow-sm">
                    <figure>
                        <img
                        className='h-[300px]'
                            src="https://img1.wsimg.com/isteam/getty/1516239450"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto">Pet (Adoption)</h2>
                        <p>Adoption saves lives — start with one.</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
                <div onClick={() => navigate('/products/food')} className="card bg-base-100 w-full shadow-sm">
                    <figure>
                        <img
                        className='h-[300px]'
                            src="https://bymit.co.uk/cdn/shop/articles/shutterstock_493398934-1.jpg?v=1620676259"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto">Pet Food</h2>
                        <p>Feed them love, one bowl at a time</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
                <div onClick={() => navigate('/products/accessories')}  className="card bg-base-100 w-full shadow-sm">
                    <figure>
                        <img
                        className='h-[300px]'
                            src="https://static.vecteezy.com/system/resources/previews/008/159/519/large_2x/pet-care-concept-various-pet-accessories-and-tools-on-pink-background-flat-lay-photo.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto">Accessories</h2>
                        <p>Style your pet with comfort and charm.</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
                <div onClick={() => navigate('/products/care')}  className="card bg-base-100 w-full shadow-sm">
                    <figure>
                        <img
                        className='h-[300px]'
                            src="https://curebydesign.in/wp-content/uploads/2024/04/Cure-By-Design-hemp-for-Pets-1300x731.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto">Pet Care Products</h2>
                        <p>Love them, groom them, care for them.</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
            </div>

            <h3 className='text-5xl text-center font-bold mb-5 mt-15'>Recent Listings</h3>
            <div className='grid grid-cols-3 gap-5'>
                {
                    data.map(product => <CategoryDetails key={product._id} product={product}></CategoryDetails>)
                }
            </div>

        </div>
    );
};

export default Home;    