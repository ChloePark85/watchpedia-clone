import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LatestMovieSection from "../features/movie/latest";

function MainPage() {
  return (
    <div>
      <Header />
      <LatestMovieSection />
      <Footer />
    </div>
  );
}

export default MainPage;
