import { React } from "react";
// import { Link } from "react-router-dom"

function DashboardHeader() {
    return (
        <header id="dashboardheader">
            <div className="d-flex flex-column">

                <div className="profile">
                    <img src={require("../dashboardimg/profile-img.jpg")} alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Alex Smith</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu dashboardnavbar">
                    <ul>
                        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>

                        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Explore</span></a></li>
                        
                        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default DashboardHeader;