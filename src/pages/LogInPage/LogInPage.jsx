

import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LinearGradient } from 'react-text-gradients';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const LogInPage = () => {
    const { signInUser, googleLogin,githubLogin } = useContext(AuthContext)

    const handleSignin = (e) => {

        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        // sign in user

        signInUser(email, password)
            .then(result => {
                console.log(result.user);

            })
            .catch(error => {
                console.error(error)
            })

    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
             console.log(result.user);
        })
        .catch(error => {
             console.error(error)
 
        })


    }

    const handleGithubLogin = () => {
        
        githubLogin()
        .then(result => {
             console.log(result.user);
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

            <div className="hero min-h-screen bg-base-200 mb-10 mt-10 animate__animated animate__backInDown ">


                <div className="  bg-red-200 w-[500px] shadow-2xl ">
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
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-ghost bg-transparent border border-blue-700"><LinearGradient gradient={['to right', 'red, blue']}>LOG IN</LinearGradient></button>
                        </div>
                    </form>



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

                    <p className='text-center p-4'>Dont have any account <Link to={'/register'}> <span> Register</span></Link></p>
                </div>

            </div>
        </div>
    );
};

export default LogInPage;