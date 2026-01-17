import React from 'react';
import { Link } from 'react-router';

const NotAuthorized = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <h1 className="text-6xl font-bold text-red-500 mb-4">403</h1>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Not Authorized
            </h2>

            <p className="text-gray-600 text-center max-w-md mb-6">
                Sorry, you do not have permission to access this page.
                Please contact the administrator or return to your dashboard.
            </p>

            <Link
                to="/"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default NotAuthorized;