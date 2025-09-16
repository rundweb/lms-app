import React from "react";
import SideBar from "../../../Layouts/SideBar";
import TopBar from "../../../Layouts/TopBar";
import { useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

const Edit = ({ title, users }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: users.name || "",
        email: users.email || "",
        password: "",
        password_confirmation: "",
        role: users.role || "",
    });

    const handleEdit = async (e) => {
        e.preventDefault();

        put(`/admin/user/${users.id}`);
    };
    return (
        <SideBar>
            <TopBar text={title} />
            <div className="mx-6 my-5 bg-white shadow-lg border rounded-xl max-w-xl w-full flex flex-col">
                <h1 className="px-6 py-4 border-b text-slate-700 font-medium text-base tracking-wide">
                    User Form
                </h1>
                <form onSubmit={handleEdit} className="flex flex-col gap-4 p-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-800">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="border rounded-md p-2.5 text-sm text-slate-600 outline-blue-500"
                        />
                        {errors.name && (
                            <p className="text-red-500 font-medium text-xs tracking-wide">
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-800">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="border rounded-md p-2.5 text-sm text-slate-600 outline-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 font-medium text-xs tracking-wide">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-800 flex items-center">
                            Password <span className="text-red-500 text-xs font-normal ml-2">Do not fill if not updating.</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="border rounded-md p-2.5 text-sm text-slate-600 outline-blue-500"
                        />
                        {errors.password && (
                            <p className="text-red-500 font-medium text-xs tracking-wide">
                                {errors.password}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-800 flex items-center">
                            Confirm password{" "}
                            <span className="text-red-500 text-xs font-normal ml-2">Do not fill if not updating.</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Confirmation password"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            className="border rounded-md p-2.5 text-sm text-slate-600 outline-blue-500"
                        />
                        {errors.password_confirmation && (
                            <p className="text-red-500 font-medium text-xs tracking-wide">
                                {errors.password_confirmation}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-slate-800">
                            Level <span className="text-red-500">* </span>:
                        </label>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    value="admin"
                                    checked={data.role === "admin"}
                                    onChange={(e) =>
                                        setData("role", e.target.value)
                                    }
                                />
                                <label className="text-sm font-medium text-slate-600">
                                    Admin
                                </label>
                            </div>
                            <div className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    value="guru"
                                    checked={data.role === "guru"}
                                    onChange={(e) =>
                                        setData("role", e.target.value)
                                    }
                                />
                                <label className="text-sm font-medium text-slate-600">
                                    Guru
                                </label>
                            </div>
                            <div className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    value="siswa"
                                    checked={data.role === "siswa"}
                                    onChange={(e) =>
                                        setData("role", e.target.value)
                                    }
                                />
                                <label className="text-sm font-medium text-slate-600">
                                    Siswa
                                </label>
                            </div>
                        </div>
                    </div>
                    {errors.role && (
                        <p className="text-red-500 font-medium text-xs tracking-wide">
                            {errors.role}
                        </p>
                    )}
                    <div className="flex items-center gap-2">
                        <Link
                            href="/admin/user"
                            className="bg-gray-100 border border-gray-400 p-2.5 text-sm tracking-wide rounded-md text-gray-500 px-3.5"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 border border-blue-500 p-2.5 text-sm tracking-wide rounded-md text-white px-3.5"
                        >
                            {processing ? "Loading ..." : "Save Data"}
                        </button>
                    </div>
                </form>
            </div>
        </SideBar>
    );
};

export default Edit;
