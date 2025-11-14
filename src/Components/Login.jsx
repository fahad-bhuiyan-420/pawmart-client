import React, { use, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import NavBar from './NavBar';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    
    const { signIn, setUser, googleSignIn } = use(AuthContext);
    const [error, setError] = useState(null);
    // console.log(gamePath);
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider()
    const emailRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log('trying to login', email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError('Invalid Password or Email. Try Again')
            })
    }

    // const handlePassword = (e) => {
    //    e.preventDefault();
    //    const email = emailRef.current.value;
    //     console.log('forgot password', email);

    //     forgotPassword(email)
    //     .then(() => {
    //         alert('Password reset sent to email')
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        console.log('google login')

        googleSignIn(provider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
    document.title = "Login | My Website";
  }, []);

    return (

        <div>            
            <div className="hero bg-base-200 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input ref={emailRef} type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <Link to='/updatePassword'><div><a className="link link-hover">Forgot password?</a></div></Link>
                                <h2 className='text-xl'>Don't have an account? <Link className='text-blue-500 underline' to='/register'>Register</Link></h2>
                                {
                                    error && <h3 className='text-red-500'>{error}</h3>
                                }
                                <button className="btn btn-neutral mt-4">Login</button>

                                <button onClick={handleGoogleLogin} className='btn bg-base-300 flex border-2 mx-auto my-5 w-full'> <FcGoogle></FcGoogle> Login with Google</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;