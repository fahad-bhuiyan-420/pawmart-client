import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        let photoURL = e.target.photoURL.value;
        
        setError(null);
        setSuccess(null);

        if (!photoURL) {
            photoURL = 'https://img.icons8.com/?size=80&id=IBgUXg3MQlTW&format=png';
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!passwordPattern.test(password)) {
            setError('Password must contain at least one uppercase and one lowercase letter.');
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoURL });
                        setSuccess('Registration Successful! Welcome to the family.');
                        setTimeout(() => navigate('/'), 1500);
                    })
                    .catch((error) => {
                        console.error(error);
                        setUser(user);
                    });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    useEffect(() => {
        document.title = "Join PawMart | Start Your Pet Journey";
    }, []);

    return (
        <div className="min-h-screen bg-orange-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create Your PawMart Account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Join thousands of happy pet parents today.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl border border-orange-100 sm:rounded-lg sm:px-10">
                    <form onSubmit={handleRegister} className="space-y-4">
                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input 
                                type="text" name="name" required 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" 
                                placeholder="Your Name" 
                            />
                        </div>

                        {/* Photo URL Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                            <input 
                                type="text" name="photoURL" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" 
                                placeholder="Link to profile picture" 
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input 
                                type="email" name="email" required 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" 
                                placeholder="example@mail.com" 
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input 
                                type="password" name="password" required 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" 
                                placeholder="••••••••" 
                            />
                        </div>

                        {/* Alerts */}
                        {error && (
                            <div className="bg-red-50 p-3 rounded-md">
                                <p className="text-xs text-red-600 font-medium">{error}</p>
                            </div>
                        )}
                        {success && (
                            <div className="bg-green-50 p-3 rounded-md">
                                <p className="text-xs text-green-600 font-medium">{success}</p>
                            </div>
                        )}

                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                                Register Now
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center border-t border-gray-100 pt-4">
                        <p className="text-sm text-gray-600">
                            Already a member?{' '}
                            <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;