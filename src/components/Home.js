import { React } from "react";

import Header from './header.js'
import Carousels from "./carousel.js"
import MainPage from './MainPage.js'
import Footer from './footer.js'

function Home() {
  return (
    <>
      <Header />
      <Carousels />
      <MainPage />
      <Footer />
    </>
  );
}

export default Home;