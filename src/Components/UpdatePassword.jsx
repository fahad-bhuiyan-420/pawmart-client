import React, { use, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const UpdatePassword = () => {
    const {forgotPassword} = use(AuthContext)
    const handleReset = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        forgotPassword(email)
        .then(() => {
            alert('Password reset email sent')
        })
        .catch((error) => {
            console.log(error.message);
        })

    }

    useEffect(() => {
        document.title = "UpdatePassword";
      }, []);
    return (
        <div>
            <div className='h-[100vh] my-20'>
                <form onSubmit={handleReset} className="card-body w-90 flex  mx-auto ">
                    <h1 className="text-4xl font-bold">Reset Password</h1>
                    <fieldset className="fieldset ">
                        <label className="label ">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        <button className="btn btn-neutral mt-4 ">Reset Password</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default UpdatePassword;