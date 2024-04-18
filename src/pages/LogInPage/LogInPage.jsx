
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LinearGradient } from 'react-text-gradients';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useState } from "react";



const LogInPage = () => {

    const [loginError, setLoginError] = useState();
    const [successMessage, setSuccessMessage] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);


    //navigation
    const location = useLocation();
    const Navigate = useNavigate();

    const handleSignin = (e) => {

        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password)

        //reset form values
        setLoginError('');
        setSuccessMessage('');

        //validation
        if (!email || !password) {
            setLoginError('Please fill in all fields');
            return;
        }

        if (password.length < 6) {
            setLoginError('Password must be at least 6 characters');
            return;
        }



        // sign in user

        signInUser(email, password)
            .then(result => {
                console.log(result.user);

                setSuccessMessage('You have successfully signed in!')

                // Navigate after sign in
                Navigate(location?.state ? location?.state : '/')

            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message)
            })

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);

                setSuccessMessage('You have successfully signed in!')

                // Navigate after sign in
                Navigate(location?.state ? location?.state : '/')

            })
            .catch(error => {
                console.error(error)

            })


    }

    const handleGithubLogin = () => {

        githubLogin()
            .then(result => {
                console.log(result.user);

                setSuccessMessage('You have successfully signed in!')

                // Navigate after sign in
                Navigate(location?.state ? location?.state : '/')

            })
            .catch(
                error => {
                    console.error(error)
                }
            )


    }





    return (
        <div>
            <Helmet>
                <title>Luxe | Login</title>
            </Helmet>

            <div className="hero md:min-h-screen bg-base-200 mb-10 mt-10 animate__animated animate__backInDown ">


                <div className="  bg-red-200 md:w-[500px] shadow-2xl ">
                    <div className='mt-4 text-center'>
                        <LinearGradient className="font-bold text-4xl   font-serif" gradient={['to right', 'red, blue']}> Luminary Luxe </LinearGradient>
                    </div>


                    <form
                        onSubmit={handleSignin}

                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                placeholder='password'
                                name='password'
                                className="input input-bordered " />

                            <span onClick={() => setShowPassword(!showPassword)} className='flex  justify-end -translate-y-8'>
                                {
                                    showPassword ? <FaEyeSlash className=" text-2xl text-gray-500" /> : <FaEye className="text-2xl text-gray-500" />
                                }

                            </span>


                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-ghost bg-transparent border border-blue-700"><LinearGradient gradient={['to right', 'red, blue']}>LOG IN</LinearGradient></button>
                        </div>
                    </form>
                    {
                        loginError &&
                        <p className="text-red-500 text-center">
                            {loginError}
                        </p>
                    }
                    {
                        successMessage &&
                        <p className="text-green-500 text-center">
                            {successMessage}
                        </p>
                    }



                    {/* social login */}

                    <div className='p-4'>
                        <button onClick={handleGoogleLogin}

                            className='btn btn-ghost  w-full  mb-2 border-blue-700'>
                            <LinearGradient className='flex items-center gap-2'
                                gradient=
                                {['to right', 'red, blue']}
                            ><FaGoogle className='text-2xl'>
                                </FaGoogle>Google Log In</LinearGradient>
                        </button>


                        <button
                            onClick={handleGithubLogin}
                            className='btn btn-ghost w-full border-blue-700'> <LinearGradient className='flex items-center gap-2' gradient={['to right', 'red, blue']}> <FaGithub className='text-2xl'></FaGithub>Github Login</LinearGradient></button>
                    </div>

                    <p className='text-center p-4'>Dont have any account <Link to={'/register'}> <span className='font-bold mr-4'> Register</span></Link></p>
                </div>

            </div>
        </div>
    );
};

LogInPage.propTypes = {
    signInUser: PropTypes.func.isRequired,
    googleLogin: PropTypes.func.isRequired,
    githubLogin: PropTypes.func.isRequired,
}

export default LogInPage;