import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Loader from "../Components/loader";
import CoverVid from "../images/spiderman.mp4";
import Slider from "../Components/sliders";
import MovieCover1 from "../images/movie_collage.jpg";
import MovieCover2 from "../images/movie_collage2.jpg";
import MovieCover3 from "../images/movie_collage3.jpg";
import Poster from "../images/cover.jpg";
import Poster2 from "../images/inception.jpg";

export default function Home() {
  const items = ["A", "B", "C"];
  const [flag, setFlag] = useState(0);
  if (flag === 1) {
    return (
      <>
        <div className="video-container">
          <video id="bg-video" loop muted autoPlay>
            <source src={CoverVid} type="video/mp4" />
          </video>
          <div className="overlay-content-1">
            <Header />
          </div>
          <div className="overlay-content-2">
            <div id="cover-info">
              <div id="cover-title">Spider-Man: No Way Home</div>
              <div id="cover-description">
                Spider-Man seeks the help of Doctor Strange to forget his
                exposed secret identity as Peter Parker. However, Strange's
                spell goes horribly wrong, leading to unwanted guests entering
                their universe.
              </div>
              <div className="flex">
                <div id="cover-button-1">
                  <button>Learn More</button>
                </div>
                <div id="cover-button-2">
                  <button>To Watch</button>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay-content-3">
            <div>Special For You</div>
            <div className="mt-4">
              <Slider />
            </div>
          </div>
          <div className="overlay-content-4">
            <div>Featured Collections</div>
            <div className="mt-4 container">
              <div className="home-box item">
                <div>
                  The Best <br />
                  Mystical Shows
                </div>
                <div>
                  <img src={MovieCover1} alt="" />
                </div>
              </div>
              <div className="home-box item">
                <div>
                  Top 20 <br />
                  Action Shows
                </div>
                <div>
                  <img src={MovieCover2} alt="" />
                </div>
              </div>
              <div className="home-box item">
                <div>
                  The Best <br /> Classical Shows
                </div>
                <div>
                  <img src={MovieCover3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="overlay-content-5">
            <div>Trending Now</div>
            <div className="mt-4">
              <Slider />
            </div>
          </div>
          <div className="overlay-content-6" style={{ width: "90vw" }}>
            <div>Most Popular</div>
            {items.map((item, index) => (
              <div key={index} className="mt-4 container">
                <div className="slider-box pr-1 pl-1 mr-1 ml-1">
                  <div>
                    <img src={Poster} alt="" />
                  </div>
                  <div className="slider-title">SHOGUN</div>
                  <div className="slider-description">2024, Action</div>
                </div>
                <div className="slider-box pr-1 pl-1 mr-1 ml-1">
                  <div>
                    <img src={Poster2} alt="" />
                  </div>
                  <div className="slider-title">Title</div>
                  <div className="slider-description">Year, Genre</div>
                </div>
                <div className="slider-box pr-1 pl-1 mr-1 ml-1">
                  <div>
                    <img src={Poster} alt="" />
                  </div>
                  <div className="slider-title">Title</div>
                  <div className="slider-description">Year, Genre</div>
                </div>
                <div className="slider-box pr-1 pl-1 mr-1 ml-1">
                  <div>
                    <img src={Poster2} alt="" />
                  </div>
                  <div className="slider-title">Title</div>
                  <div className="slider-description">Year, Genre</div>
                </div>
                <div className="slider-box pr-1 pl-1 mr-1 ml-1">
                  <div>
                    <img src={Poster} alt="" />
                  </div>
                  <div className="slider-title">Title</div>
                  <div className="slider-description">Year, Genre</div>
                </div>
              </div>
            ))}
          </div>
          <div className="overlay-content-7">
            <button id="home-show-button">Show More</button>
          </div>
        </div>
        <div style={{ marginTop: "400vh" }}>
          <Footer></Footer>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      </>
    );
  }
}
