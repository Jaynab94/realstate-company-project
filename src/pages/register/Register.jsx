import { LinearGradient } from 'react-text-gradients';
import img1 from '../../../public/bed 2.jpg'
import 'animate.css';

import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';






const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');

    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const Navigate = useNavigate();




    const handleRegister = (e) => {



        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);


        //reset form values
        setRegisterError('');
        setSuccessMessage('');


        //validation

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters');
            return;
        } else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            setRegisterError('Password must contain at least one lowercase letter and one uppercase letter');
            return;
        }






        //crate a user
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                setSuccessMessage('You have successfully signed in!');

                //update user
                updateUser(name, Image)
                    .then(() => {
                        // Navigate after sign in
                        Navigate(location?.state ? location?.state : '/')

                    })
            })


            .catch(error => {
                console.error(error);
                setRegisterError(error.message);


            })



    }


    return (
        <section className="p-6 md:max-h-screen  lg:mb-20   dark:text-gray-800">
            <Helmet>
                <title>Register | Luminary Luxe</title>
            </Helmet>
            <div className="container grid gap-6 mx-auto text-center md:grid-cols-2 xl:grid-cols-5">
                <div className="w-full   px-6 py-16 animate__animated animate__pulse duration-1000 shadow-2xl rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-red-200">
                    <span className="block mb-2 dark:text-violet-600">Welcome to Our Exquisite Hotel</span>

                    <LinearGradient className="text-5xl font-bold font-serif" gradient={['to right', 'red, blue']}> Welcome to Luminary Luxe </LinearGradient>
                    <p className="my-8">
                        <span className="font-medium dark:text-gray-900">Luminary Luxe: Where Opulence Meets Unparalleled Hospitality. Experience a World of Luxury Beyond Compare.</span>
                    </p>


                    <form
                        onSubmit={handleRegister}
                        className="self-stretch space-y-3">
                        <div>
                            <label htmlFor="name" className="text-sm sr-only">Your name</label>
                            <input id="name" required type="text" name='name' placeholder="Your name" className="w-full rounded-md p-2"


                            />

                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm sr-only">Your email</label>
                            <input id="email" required type="email" name='email' placeholder="Your email" className="w-full rounded-md  p-2"
                            />

                        </div>
                        <div>
                            <label htmlFor="photoUrl" className="text-sm sr-only">Your photo</label>
                            <input id="photoUrl" type="text" name='photoUrl' placeholder="Your photo Url" className="w-full p-2 rounded-md "
                            />

                        </div>
                        <div className='flex items-center gap-4'>
                            <label htmlFor="password"
                                className="text-sm sr-only">password</label>
                            <input id="password"
                                name='password'
                                type={showPassword ? "text" : "password"}
                                placeholder="password" required
                                className="w-full rounded-md p-2 "
                            />
                            <span onClick={() => setShowPassword(!showPassword)}>

                                {
                                    showPassword ? <FaEyeSlash className="w-4 h-4 text-gray-500" /> : <FaEye className="w-4 h-4 text-gray-500" />
                                }
                            </span>

                        </div>




                        <button className="w-full animate__animated animate__fadeInLeft py-2 font-semibold rounded  border-blue-600 border-2"><LinearGradient gradient={['to right', 'red, blue']}>REGISTER</LinearGradient></button>
                    </form>

                    {
                        registerError && <p className="text-red-500 text-xl "> {registerError}</p>
                    }


                    {

                        successMessage && <p className="text-green-500 text-2xl"><LinearGradient gradient={['to right', 'red, blue']}> {successMessage}</LinearGradient> </p>
                    }

                    <p className="px-6 text-sm text-center py-6">Already have an account?
                        <Link to={'/login'}><span className='hover:underline font-bold ml-4'>Sign In</span></Link>
                    </p>
                </div>
                <img src={img1} alt="" className="object-cover animate__animated animate__pulse  rounded-md xl:col-span-3 dark:bg-gray-500" />
            </div>
        </section>
    );
};

export default Register;