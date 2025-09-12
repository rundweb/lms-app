import { Link, usePage } from "@inertiajs/inertia-react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { PiSignOutFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

const TopBar = ({ text, children }) => {
    const { user, session } = usePage().props;
    const [showLogout, setShowLogout] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

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
    const menuLogout = [
        {
            name: "Edit Profile",
            path: "/admin/profile",
            icon: HiOutlineUserCircle,
        },
        {
            name: "Account Setting",
            path: "/admin/setting",
            icon: IoSettingsOutline,
        },
        {
            name: "Sign Out",
            path: "/logout",
            icon: PiSignOutFill,
            methods: "post",
        },
    ];
    return (
        <div className="flex flex-col gap-5 w-full relative">
            <div
                className={`absolute z-10 top-2 right-6 bg-blue-50 p-4 rounded-lg border border-blue-300 ${
                    showSuccess
                        ? "translate-x-0 opacity-100"
                        : "pointer-events-none translate-x-5 opacity-0"
                } duration-700 ease-in-out transition-all`}
            >
                <p className="text-sm tracking-wide text-blue-700 flex items-center gap-2.5">
                    <FaInfoCircle className="text-base" />
                    {session.success}
                </p>
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 w-full relative">
                <div className="flex flex-col">
                    <h1 className="font-semibold text-2xl text-slate-800 tracking-wide capitalize">
                        {text}
                    </h1>
                    {text === "Dashboard Admin" ? null : (
                        <p className="text-sm tracking-wide text-slate-500">
                            Dashboard / {text}
                        </p>
                    )}
                </div>
                <div
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => setShowLogout(!showLogout)}
                >
                    <div className="bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center text-2xl text-slate-600 border-2 border-slate-600 font-bold shadow-md">
                        <h1>A</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-slate-600 text-sm font-medium tracking-wide capitalize">
                            {user.name}
                        </h1>
                        {showLogout ? (
                            <IoIosArrowUp className="relative top-[1px] text-slate-600" />
                        ) : (
                            <IoIosArrowDown className="relative top-[1px] text-slate-600" />
                        )}
                    </div>
                </div>
                <div
                    className={`fixed right-6 top-20 bg-white border rounded-2xl p-4 shadow-md min-w-72 ${
                        showLogout
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-10 pointer-events-none"
                    } duration-700 transition-all ease-in-out`}
                >
                    <div className="flex flex-col gap-1">
                        <h1 className="text-sm font-medium text-slate-800 tracking-wide capitalize">
                            {user.name}
                        </h1>
                        <h2 className="text-sm text-slate-500 tracking-wide">
                            {user.email}
                        </h2>
                        <div className="flex flex-col gap-2 mt-4">
                            {menuLogout.map((item, i) => (
                                <Link
                                    as="button"
                                    key={i}
                                    href={item.path}
                                    method={item.methods ? item.methods : ""}
                                    className="flex items-center gap-2 p-2.5 text-slate-700 text-sm font-medium tracking-wide hover:bg-slate-100 rounded-md duration-300 ease-in-out"
                                >
                                    <item.icon className="text-xl" />
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default TopBar;
