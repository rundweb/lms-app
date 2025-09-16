import React from "react";
import { RxDashboard } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
import { PiChalkboardTeacher, PiStudent } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { LuBookMarked } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { RiUserReceived2Line } from "react-icons/ri";
import { MdOutlineGrade, MdOutlineAnnouncement } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, usePage } from "@inertiajs/inertia-react";

const SideBarComponents = () => {
    // 👉 ambil user dari inertia (sudah dishare lewat middleware)
    const { user } = usePage().props;
    const role = user?.role; // admin | guru | siswa

    // daftar menu, setiap item punya akses role tertentu
    const menus = [
        {
            name: "Dashboard",
            path: "/admin",
            icon: RxDashboard,
            roles: ["admin", "guru", "siswa"],
        },
        {
            name: "Users",
            path: "/admin/user",
            icon: LuUsers,
            roles: ["admin"],
        },
        {
            name: "Teacher",
            path: "/admin/guru",
            icon: PiChalkboardTeacher,
            roles: ["admin"],
        },
        {
            name: "Student",
            path: "/admin/siswa",
            icon: PiStudent,
            roles: ["admin"],
        },
        {
            name: "Classes",
            path: "/class",
            icon: SiGoogleclassroom,
            roles: ["admin", "guru", "siswa"],
        },
        {
            name: "Subjects",
            path: "/admin/subject",
            icon: LuBookMarked,
            roles: ["admin", "guru", "siswa"],
        },
        {
            name: "Lesson timetable",
            path: "/jadwal",
            icon: FaRegFileAlt,
            roles: ["admin", "guru", "siswa"],
        },
        {
            name: "Absence",
            path: "/absensi",
            icon: RiUserReceived2Line,
            roles: ["admin", "guru", "siswa"],
        },
        {
            name: "Grades",
            path: "/nilai",
            icon: MdOutlineGrade,
            roles: ["admin", "guru", "siswa"],
        },
        {
            name: "Announcement",
            path: "/pengumuman",
            icon: MdOutlineAnnouncement,
            roles: ["admin", "guru", "siswa"],
        },

    ];

    // filter sesuai role user yang login
    const filteredMenus = menus.filter((item) => item.roles.includes(role));

    return (
        <div className="flex flex-col gap-1">
            {filteredMenus.map((item, i) => (
                <Link
                    href={item.path}
                    key={i}
                    className="flex items-center gap-4 p-2.5 px-3 hover:bg-blue-50 rounded-md group duration-300 ease-in-out"
                >
                    <item.icon className="text-lg text-slate-600 group-hover:text-blue-600" />
                    <span className="text-sm font-medium text-slate-700 tracking-wide group-hover:text-blue-600">
                        {item.name}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default SideBarComponents;
