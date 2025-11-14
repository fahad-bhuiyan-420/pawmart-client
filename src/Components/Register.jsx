import React, { use, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';


const Register = () => {
    const navigate = useNavigate()
     const {user, createUser, setUser, updateUser } = use(AuthContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        let photoURL = e.target.photoURL.value
        setSuccess(null);

        if (!photoURL) {
            photoURL = 'https://img.icons8.com/?size=80&id=IBgUXg3MQlTW&format=png'
        }
        // console.log(email, name, password, photoURL);

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!passwordPattern.test(password)) {
            setError('Password must contain one uppercase, one lowercase letter')
            return
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoURL })
                        navigate('/')
                        setSuccess('Registration Successful')
                    })
                    .catch((error) => {
                        console.log(error)
                        setUser(user);
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    console.log(user)
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <h1 className="text-5xl font-bold">Register</h1>
                            <fieldset className="fieldset">
                                {/* Name */}
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" required />
                                {/* Pthoto URL */}
                                <label className="label">Photo URL</label>
                                <input type="text" name='photoURL' className="input" placeholder="Photo URL" />
                                {/* Email */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" required />
                                {/* Password */}
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" required />
                                {error && <h2 className='text-red-500'>{error}</h2>}
                                {success && <h2 className='text-green-500'>{success}</h2>}
                                <h2 className='text-xl'>Already have an account? <Link className='text-blue-500 underline' to='/login'>Login</Link></h2>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;