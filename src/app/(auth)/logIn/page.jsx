"use client"
import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form"
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { createAuthClient } from "better-auth/react";

const LogInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const authClient = createAuthClient();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const { email, password } = data

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        // console.log(res , error)
        if (res) {
            toast.success('Successfully Login')
        }

        if (error) {
            toast.error(error?.message)
        }
    }

    const handleGoogleSingIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh] mx-3">
            <div className=" bg-stone-50 p-10 shadow-xl rounded-2xl w-[500] space-y-3 hover:shadow-orange-200">
                <div>
                    <h1 className="font-bold text-stone-600 text-2xl text-center mb-6">Login <span className="text-orange-500">with account</span></h1>
                </div>
                <div className="divider"></div>
                <div>
                    <form className="mt-6 space-y-2" onSubmit={handleSubmit(onSubmit)} >


                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg text-gray-500">Email address</legend>
                            <input type="email"
                                className="input w-full"
                                placeholder="Enter your Email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <p className="label text-red-500">Please Enter your email address</p>}


                        </fieldset>

                        <fieldset className="fieldset relative">
                            <legend className="fieldset-legend text-lg text-gray-500">Password</legend>

                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="input w-full pr-10"
                                    placeholder="Enter your Password"
                                    {...register("password", { required: true })}
                                />

                                {/* Toggle Button */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
                                >
                                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                </button>
                            </div>

                            {errors.password && <p className="label text-red-500">Please Enter your Password</p>}

                            <button className="btn bg-orange-400 hover:bg-orange-600 text-lg text-white w-full  mt-4">Login</button>
                        </fieldset>



                        <p className="text-center mt-3">Dont’t Have An Account ? <Link href={'/register'} className="text-orange-500">Register</Link>

                        </p>
                    </form>
                    <div className="mt-3">
                        <button className="btn w-full text-blue-500 border-2 border-blue-500 rounded-2xl flex items-center" onClick={handleGoogleSingIn}>
                            <FaGoogle />
                            <p >Login with Google
                            </p>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LogInPage;