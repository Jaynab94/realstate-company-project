import { LinearGradient } from 'react-text-gradients';
import img1 from '../../../public/bed 2.jpg'
import 'animate.css';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        createUser(email, password)
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.log(error)

            })

    }



    return (
        <section className="p-6 md:max-h-screen  lg:mb-28   dark:text-gray-800">
            <div className="container grid gap-6 mx-auto text-center md:grid-cols-2 xl:grid-cols-5">
                <div className="w-full   px-6 py-16 animate__animated animate__pulse duration-1000 shadow-2xl rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-red-200">
                    <span className="block mb-2 dark:text-violet-600">Welcome to Our Exquisite Hotel</span>

                    <LinearGradient className="text-5xl font-bold font-serif" gradient={['to right', 'red, blue']}> Welcome to Luminary Luxe </LinearGradient>
                    <p className="my-8">
                        <span className="font-medium dark:text-gray-900">Luminary Luxe: Where Opulence Meets Unparalleled Hospitality. Experience a World of Luxury Beyond Compare.</span>
                    </p>


                    <form onSubmit={handleSubmit(onSubmit)} className="self-stretch space-y-3">
                        <div>
                            <label htmlFor="name" className="text-sm sr-only">Your name</label>
                            <input id="name" type="text" placeholder="Your name" className="w-full rounded-md p-2"
                                {...register("name", { required: true })}

                            />
                            {errors.name && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm sr-only">Your email</label>
                            <input id="email" type="email" placeholder="Your email" className="w-full rounded-md  p-2"
                                {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor="photoUrl" className="text-sm sr-only">Your photo</label>
                            <input id="photoUrl" type="text" placeholder="Your photo Url" className="w-full p-2 rounded-md "
                                {...register("photo Url")} />

                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm sr-only">password</label>
                            <input id="password" type="password" placeholder="new password" className="w-full rounded-md p-2 "
                                {...register("password", { required: true })} />
                            {errors.password && <span className='text-red-700'>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor="confirm password" className="text-sm sr-only">confirm password</label>
                            <input id="confirm_password" type="password" placeholder=" confirm password" className="w-full  rounded-md p-2 "
                                {...register("confirm_password", { required: true })} />
                            {errors.confirm_password && <span className='text-red-700'>This field is required</span>}
                        </div>


                        <button className="w-full animate__animated animate__fadeInLeft py-2 font-semibold rounded  border-blue-600 border-2"><LinearGradient gradient={['to right', 'red, blue']}>REGISTER</LinearGradient></button>
                    </form>
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