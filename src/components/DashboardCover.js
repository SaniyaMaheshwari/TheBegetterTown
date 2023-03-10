import { React } from "react";
// import { Link } from "react-router-dom";

function DashboardCover(){
    return (
        <section id="dashboardhero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Alex Smith</h1>
          <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
        </div>
      </section>
    );
}

export default DashboardCover;