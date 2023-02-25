import { React } from "react";
import { Link } from "react-router-dom"
import DashboardHeader from "./DashboardHeader.js"
import DashboardCover from "./DashboardCover.js";
import DashboardMain from "./DashboardMain.js";

function Dashboard(){
    return (
        <>
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

            <DashboardHeader />
            <DashboardCover />
            <DashboardMain />
        </>
    );
}

export default Dashboard;