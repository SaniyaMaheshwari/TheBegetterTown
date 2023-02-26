import { React } from "react";
import { Link } from "react-router-dom"
import Login_ from "./login.js"

function Header(){
    return (
        <header id="header" className="fixed-top d-flex align-items-center ">
        <div className="container d-flex align-items-center justify-content-between">
    
          <a href="index.html" className="logo"><img src={require("../img/apple-touch-icon.png")} alt="TBT" className="img-fluid"/></a>
    
          <nav id="navbar" className="navbar">
            <ul>
              {/* <li><a className="nav-link scrollto active" href="#hero">Home</a></li> */}
              <li><Link className="nav-link scrollto" to="/">Home</Link></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              {/* <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
              <li><Link className="nav-link scrollto" to="/header">Header</Link></li>
              <li><Link className="nav-link scrollto" to="/footer">Footer</Link></li> */}
             
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li><Link className="nav-link scrollto" to="/dashboard">Dashboard</Link></li>
              <li><Link className="nav-link scrollto" to="/explore">Explore</Link></li>
              <li><a href="blog.html">Blog</a></li>
              <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li><Login_/></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
        </div>
      </header>
    );
}

export default Header;