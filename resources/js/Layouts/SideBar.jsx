import React from "react";
import { Link } from "@inertiajs/inertia-react";
import SideBarComponents from "../Components/SideBarComponents";

const SideBar = ({ children }) => {
    return (
        <div className="flex">
            <div className="flex flex-col gap-6 p-4 min-w-60 border-r min-h-screen">
                <div className="flex items-center gap-2.5">
                    <img src="/images/logo.svg" alt="" />
                    <div>
                        <h1 className="font-extrabold tracking-wider text-2xl text-slate-800">
                            <span className="text-blue-600">L</span>earning
                        </h1>
                        <h2 className="text-xs tracking-wide text-slate-600">
                            <span className="font-medium text-blue-700">M</span>
                            anagement{" "}
                            <span className="font-medium text-blue-700">S</span>
                            ystem
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-xs text-slate-400">MENU</h1>
                    <SideBarComponents/>
                </div>
            </div>
            <div className="w-full">{children}</div>
        </div>
    );
};

export default SideBar;
