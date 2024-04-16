import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import 'animate.css';
import { LinearGradient } from "react-text-gradients";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';




const Login = () => {
    const [error, setError] = useState('');
    const { signInUser } = useContext(AuthContext);



    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                console.log(result.user)


            })
            .catch(error => {
                console.log(error)
                setError(error.message)

            })
    }

    <Toaster />
    return (

        <div className="w-full max-w-md mx-auto animate__animated animate__bounceInLeft bg-red-200 mt-6 mb-6 p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <p className="text-sm text-center dark:text-gray-600">Dont have account?
                <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</a>
            </p>
            <div className="my-6 space-y-4">
                <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-black focus:dark:ring-violet-600">
                    <FaGoogle className="text-2xl"></FaGoogle>
                    <p>Login with Google</p>
                </button>
                <button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-black focus:dark:ring-violet-600">
                    <FaGithub className="text-2xl"></FaGithub>
                    <p>Login with GitHub</p>
                </button>

            </div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-600" />
                <p className="px-3 dark:text-gray-600">OR</p>
                <hr className="w-full dark:text-gray-600" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}
                    </div>

                    <button className="w-full animate__animated animate__fadeInLeft py-2 font-semibold rounded  border-blue-600 border-2"><LinearGradient gradient={['to right', 'red, blue']}>Sign In</LinearGradient></button>
                </div>

                <p className="text-center">dont have an account <Link to={'/register'}><span className="hover:underline font-bold ml-4" > register</span></Link></p>

            </form>
            {
                error && <p className="text-center text-red-500">{error}</p>
            }
        </div>
    );
};

export default Login;