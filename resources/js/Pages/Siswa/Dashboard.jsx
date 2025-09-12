import React from "react";

import { Link } from "@inertiajs/inertia-react";
import SideBar from "../../Layouts/SideBar";
import TopBar from "../../Layouts/TopBar";

const Dashboard = ({ title }) => {
    return (
        <SideBar>
            <TopBar text={title} >
                <div>
                    
                </div>
            </TopBar>
        </SideBar>
    );
};

export default Dashboard;
