import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const handleRegister = async (e) => {
        e.preventDefault();

        post("/register");
    };
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-50">
            <div className="bg-white min-h-screen sm:min-h-max sm:rounded-lg sm:shadow-lg w-full sm:max-w-md flex justify-center p-5 sm:py-10 sm:px-8 flex-col gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="font-bold text-4xl text-slate-900">
                        Sign Up
                    </h1>
                    <p className="text-sm  text-slate-600 tracking-wide">
                        Enter your email and password to sign up!
                    </p>
                </div>
                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-900 tracking-wide">
                            Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="p-2.5 border border-slate-200 rounded-md text-sm text-slate-700 outline-blue-500"
                        />
                        {errors.name && (
                            <p className="text-red-500 tracking-wide text-xs font-medium">
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-900 tracking-wide">
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="p-2.5 border border-slate-200 rounded-md text-sm text-slate-700 outline-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 tracking-wide text-xs font-medium">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-900 tracking-wide">
                            Password<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="p-2.5 border border-slate-200 rounded-md text-sm text-slate-700 outline-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 tracking-wide text-xs font-medium">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <button
                      disabled={processing}
                        type="submit"
                        className="bg-blue-500 p-2.5 text-white rounded-md font-medium text-base shadow-md hover:bg-blue-600 duration-300 ease-in-out"
                    >
                        {processing ? "Loading ...":"Sign Up"}
                    </button>
                </form>
                <div className="text-center">
                    <h1 className="text-sm  text-slate-600 tracking-wide">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-blue-500 hover:text-blue-600 font-medium duration-200 ease-in-out"
                        >
                            Sign In
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Register;
