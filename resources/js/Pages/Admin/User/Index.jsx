import React, { useState } from "react";

import { Link } from "@inertiajs/inertia-react";
import SideBar from "../../../Layouts/SideBar";
import TopBar from "../../../Layouts/TopBar";
import { IoMdAdd } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ title, users }) => {
    const [searchUsers, setSearchUsers] = useState("");

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchUsers.toLowerCase()) ||
            user.email.toLowerCase().includes(searchUsers.toLowerCase()) ||
            user.role.toLowerCase().includes(searchUsers.toLowerCase())
    );

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this data?")) {
            Inertia.delete(`/admin/user/${id}`);
        }
    };
    return (
        <SideBar>
            <TopBar text={title}>
                <div className="mx-6 bg-white shadow-lg p-6 rounded-xl border flex flex-col gap-6 max-w-3xl w-full">
                    <div className="flex items-center justify-between">
                        <div className="relative">
                            <input
                                type="search"
                                value={searchUsers}
                                onChange={(e) => setSearchUsers(e.target.value)}
                                className="border border-gray-300 p-2.5 pl-10 rounded-md w-80 text-sm outline-offset-2 outline-blue-500 text-slate-500"
                                placeholder="Search here ..."
                            />
                            <RiSearch2Line className="absolute top-2/4 -translate-y-2/4 left-3 text-gray-500 text-xl" />
                        </div>
                        <div>
                            <Link
                                href="user/create"
                                className="flex items-center gap-2 bg-blue-500 border border-blue-500 text-white p-2.5 rounded-md text-sm  tracking-wide px-3.5"
                            >
                                Add New User <IoMdAdd className="text-lg" />
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg border">
                        <table className="w-full border-separate border-spacing-0">
                            <thead>
                                <tr>
                                    <th className="w-12">No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Level</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((item, i) => (
                                        <tr key={i}>
                                            <td className="text-center">
                                                {i + 1}
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.role}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDelete(item.id)
                                                    }
                                                >
                                                    delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="text-center text-gray-500 py-4"
                                        >
                                            No data found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </TopBar>
        </SideBar>
    );
};

export default Index;
