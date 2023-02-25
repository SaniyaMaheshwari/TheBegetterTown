import { React } from "react";
import { Link } from "react-router-dom";

function DashboardFooter() {
    return (
        <footer id="dashboardfooter">
            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>iPortfolio</span></strong>
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>
    );
}

export default DashboardFooter;