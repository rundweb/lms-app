import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { FaInfoCircle } from "react-icons/fa";

const Login = () => {
    const { session } = usePage().props;
    const [showSuccess, setShowSuccess] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        post("/login");
    };

    useEffect(() => {
        if (session.success) {
            const timerDelay = setTimeout(() => {
                setShowSuccess(true);

                const timer = setTimeout(() => {
                    setShowSuccess(false);
                }, 2400);

                return () => clearTimeout(timer);
            }, 10);

            return () => clearTimeout(timerDelay);
        }
    }, [session.success]);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 relative">
            <div
                className={`absolute top-5 bg-blue-50 p-4 rounded-lg border border-blue-300 ${
                    showSuccess
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-5 opacity-0"
                } duration-700 ease-in-out transition-all`}
            >
                <p className="text-sm tracking-wide text-blue-700 flex items-center gap-2.5">
                    <FaInfoCircle className="text-base" />
                    {session.success}
                </p>
            </div>
            <div className="bg-white min-h-screen sm:min-h-max sm:rounded-lg sm:shadow-lg w-full sm:max-w-md flex justify-center p-5 sm:py-10 sm:px-8 flex-col gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="font-bold text-4xl text-slate-900">
                        Sign In
                    </h1>
                    <p className="text-sm  text-slate-600 tracking-wide">
                        Enter your email and password to sign in!
                    </p>
                </div>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
                        type="submit"
                        className="bg-blue-500 p-2.5 text-white rounded-md font-medium text-base shadow-md hover:bg-blue-600 duration-300 ease-in-out"
                    >
                        Sign In
                    </button>
                </form>
                <div className="text-center">
                    <h1 className="text-sm  text-slate-600 tracking-wide">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="text-blue-500 hover:text-blue-600 font-medium duration-200 ease-in-out"
                        >
                            Sign Up
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Login;
