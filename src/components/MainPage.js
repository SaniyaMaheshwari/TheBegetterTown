import { React } from "react";

function MainPage() {
  return (
    <main id="main">
      <section id="icon-boxes" className="icon-boxes">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="fade-up"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4 className="title">
                  <a href="">Explore</a>
                </h4>
                <p className="description">
                Explore page is a space where you can browse through other creators' work and get new ideas for your own designs.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4 className="title">
                  <a href="">Ideas</a>
                </h4>
                <p className="description">
                Ideas page is a space where you can post your ideas and imaginations and also can get new ideas for your own designs.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4 className="title">
                  <a href="">Events</a>
                </h4>
                <p className="description">
               Events page keeps you remain updated with the events (e.g. exhibition) occurring in different regions where you can participate.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-layer"></i>
                </div>
                <h4 className="title">
                  <a href="">Portfolio</a>
                </h4>
                <p className="description">
                This facilitates the creation of a portfolio page for you by collecting the relevant data from you, which in turn can aid in you to establish identity and gain fame.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfoio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Explore</h2>
           
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">Paintings</li>
                <li data-filter=".filter-card">Handicrafts</li>
                <li data-filter=".filter-web">Fashion</li>
                <li data-filter=".filter-web">Jewellery</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src={require("../img/portfolio/portfolio-1.jpg")}
                className="img-fluid"
                alt="************************888"
              />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <a
                  href="../img/portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src={require("../img/portfolio/portfolio-2.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="../img/portfolio/portfolio-2.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src={require("../img/portfolio/portfolio-3.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <a
                  href="../img/portfolio/portfolio-3.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="App 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src={require("../img/portfolio/portfolio-4.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <a
                  href="../img/portfolio/portfolio-4.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Card 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src={require("../img/portfolio/portfolio-5.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <a
                  href="../img/portfolio/portfolio-5.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Web 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src={require("../img/portfolio/portfolio-6.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <a
                  href="../img/portfolio/portfolio-6.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="App 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src={require("../img/portfolio/portfolio-7.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <a
                  href="../img/portfolio/portfolio-7.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Card 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src={require("../img/portfolio/portfolio-8.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <a
                  href="../img/portfolio/portfolio-8.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Card 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src={require("../img/portfolio/portfolio-9.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="../img/portfolio/portfolio-9.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
            <p>
              Welcome to our website for creators! We are a team of passionate
              individuals who believe in empowering creators to achieve their
              goals and share their unique vision with the world. If you are an arist 
              we are here to help you succeed. At our core, we believe that
              creativity should be accessible to everyone. That's why we have
              designed our platform to be user-friendly and intuitive, so that
              even those who are new to the creative process can easily get
              started. We are committed to fostering a supportive community of
              creators who can learn from and inspire each other. Our platform
              is a space for collaboration, where creators can connect with
              like-minded individuals and improve their creativity Thank
              you for choosing our website for creators. We look forward to
              being a part of your creative journey!
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedxIsN3vx722kF1H4O7sbOxYO3UI3quFB-Q&usqp=CAU"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                  
                <div className="member-info">
                  <h4>Vartika Gupta</h4>
                  <span>Chief Executive Officer</span>
                 
                  <div className="social">
                    <a href="">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                      <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="ri-linkedin-box-fill"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSOfVKWeUXO1igbOj5_JZ0ZehxDhk0DL2xw&usqp=CAU"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                
                <div className="member-info">
                  <h4>Divya Rai</h4>
                  <span>Product Manager</span>
                  
                  <div className="social">
                    <a href="">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                      <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="ri-linkedin-box-fill"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 mt-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Saniya Maheshwari</h4>
                  <span>CTO</span>
               
                  <div className="social">
                    <a href="">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                      <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="ri-linkedin-box-fill"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 mt-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFD7EQ6XB0GT0v2to0Jz1mg_s8rZ8QJK84A&usqp=CAU"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Tusharika Maheshwari</h4>
                  <span>Accountant</span>
                 
                  <div className="social">
                    <a href="">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                      <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="ri-linkedin-box-fill"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>

          <div
            className="row mt-1 d-flex justify-content-end"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="col-lg-5">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 mt-5 mt-lg-0"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
