// import './App.css';
import Home from './components/Home.js'
import Header from './components/header.js'
import Carousels from "./components/carousel.js"
import MainPage from './components/MainPage.js'
import Footer from './components/footer.js'
import Dashboard from './components/dashboard.js'
import Explore from './components/Explore.js'
import './vendor/animate.css/animate.min.css'
import './vendor/aos/aos.css'
import "./vendor/bootstrap/css/bootstrap.min.css"
import "./vendor/bootstrap-icons/bootstrap-icons.css"
import "./vendor/boxicons/css/boxicons.min.css"
import "./vendor/glightbox/css/glightbox.min.css"
import "./vendor/remixicon/remixicon.css"
import "./vendor/swiper/swiper-bundle.min.css"
import "./css/style.css"
import "./vendor/aos/aos.js"
import "./vendor/bootstrap/js/bootstrap.bundle.min.js"
import "./vendor/glightbox/js/glightbox.min.js"
import "./vendor/isotope-layout/isotope.pkgd.min.js"
import "./vendor/swiper/swiper-bundle.min.js"
import "./vendor/php-email-form/validate.js"
import "./js/main.js"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { Link } from "react-router"

function componentDidMount() {
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js";
  script.async = true;
  document.body.appendChild(script);
}

componentDidMount();

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/dashboard" element = {<Dashboard />} />
        <Route path = "/explore" element = {<Explore />} />
        {/* <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
