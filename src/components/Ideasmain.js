import React from 'react'
import Popup from './Popup';

import {useState} from 'react';

export default function Ideasmain() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <section id="services" className="services" style={{paddingTop:"200px"}}>
        <div className="container" data-aos="fade-up">

            <div className="section-title">
                <h2>Ideas</h2>
                <p>Ideas page is a space where you can post your ideas and imaginations and also can get new ideas for your own designs.</p>
            </div>

            <div className="row">
                <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon-box">
                        <i className="bi bi-card-checklist"></i>
                        <h4><a href="#">Idea #1</a></h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box">
                        <i className="bi bi-bar-chart"></i>
                        <h4><a href="#">Idea #2</a></h4>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box">
                        <i className="bi bi-binoculars"></i>
                        <h4><a href="#">Idea #3</a></h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon-box">
                        <i className="bi bi-brightness-high"></i>
                        <h4><a href="#">Idea #4</a></h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="500">
                    <div className="icon-box">
                        <i className="bi bi-calendar4-week"></i>
                        <h4><a href="#">Idea #5</a></h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="600">
                    <div className="icon-box">
                        <i className="bi bi-briefcase"></i>
                        <h4><a href="#">Idea #6</a></h4>
                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                    </div>
                </div>
            </div>
          
            <button onClick={() => setButtonPopup(true)}>Add Idea</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
           <h1>Write your idea</h1>
            </Popup> 
        </div>
    </section>
    );
}