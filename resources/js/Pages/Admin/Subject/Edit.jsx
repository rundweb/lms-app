import React from "react";
import SideBar from "../../../Layouts/SideBar";
import TopBar from "../../../Layouts/TopBar";
import { useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

const Edit = ({ title, subject }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: subject.name || "",
        description: subject.description || "",
    });

    const handleEdit = async (e) => {
        e.preventDefault();

        put(`/admin/subject/${subject.id}`);
    };
    return (
        <SideBar>
            <TopBar text={title} />
            <div className="mx-6 my-5 bg-white shadow-lg border rounded-xl max-w-xl w-full flex flex-col">
                <h1 className="px-6 py-4 border-b text-slate-700 font-medium text-base tracking-wide">
                    Subject Form
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
                            Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Enter description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="border rounded-md p-2.5 text-sm text-slate-600 outline-blue-500"
                        />
                        {errors.description && (
                            <p className="text-red-500 font-medium text-xs tracking-wide">
                                {errors.description}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <Link
                            href="/admin/subject"
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
