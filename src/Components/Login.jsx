import React, { use, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signIn, setUser, googleSignIn } = use(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();
    const emailRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate('/');
            })
            .catch((error) => {
                setError('Invalid Password or Email. Please try again.');
            });
    };

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        googleSignIn(provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        document.title = "Login | PawMart - Your Pet's Favorite Store";
    }, []);

    return (
        <div className="min-h-screen bg-orange-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/* PawMart Branding/Logo could go here */}
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Welcome back, Pet Lover!
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Login to access your PawMart account
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl border border-orange-100 sm:rounded-lg sm:px-10">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input 
                                ref={emailRef} 
                                type="email" 
                                name="email" 
                                required 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" 
                                placeholder="paws@example.com" 
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                required 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" 
                                placeholder="••••••••" 
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link to="/updatePassword">
                                    <span className="font-medium text-orange-600 hover:text-orange-500 cursor-pointer">
                                        Forgot your password?
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 p-2 rounded-md">
                                <p className="text-sm text-red-600 text-center font-medium">{error}</p>
                            </div>
                        )}

                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button 
                                onClick={handleGoogleLogin} 
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                <FcGoogle className="h-5 w-5 mr-2" />
                                <span>Google</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            New to PawMart?{' '}
                            <Link to="/register" className="font-medium text-orange-600 hover:text-orange-500">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;