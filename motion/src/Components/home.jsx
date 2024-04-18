import React, { useEffect, useState } from "react";
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
  const items = ["A", "B", "C", "C", "C", "C", "C"];
  const [size,setSize]=useState(0);
  const [display,setDisplay]=useState(0);
  const [flag, setFlag] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update screenWidth state
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener to window resize event
    window.addEventListener('resize', updateScreenWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, [window.innerWidth]); // Empty dependency array ensures that this effect runs only once after component mount

  useEffect(() => {
    if (screenWidth < 768) {
      // Handle mobile screens
      setDisplay(2);
    } else if (screenWidth >= 768 && screenWidth <= 1024) {
      // Handle tablet screens
      setDisplay(4);
    } else if (screenWidth > 1024 && screenWidth <= 1440) {
      // Handle laptop screens
      setDisplay(6);
    } else if (screenWidth > 1440) {
      // Handle desktop screens
      setDisplay(8);
    }
  }, [screenWidth]); // Run this effect whenever screenWidth changes
   

  if (flag === 1) {
    return (
      <>
        <div className="video-container">
          <video id="bg-video" loop muted autoPlay>
            <source src={CoverVid} type="video/mp4" />
          </video>
          <div className="overlay-content-1" >
            <Header />
          </div>
          <div className="overlay-content-2" >
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
          <div className="overlay-content-3" >
            <div>Special For You</div>
            <div className="mt-4">
              <Slider display={display}/>
            </div>
          </div>
          <div className="overlay-content-4" >
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
          <div className="overlay-content-5" >
            <div>Trending Now</div>
            <div className="mt-4">
            <Slider display={display}/>
            </div>
          </div>
          <div className="overlay-content-6" >
            <div>Most Popular</div>
            <div className="m-4 container">
            {items.map((item, index) => (
                <div className="slider-box pr-1 pl-1 m-2.5 item">
                  <div>
                    <img src={Poster} alt={`poster `+index}/>
                  </div>
                  <div className="slider-title">SHOGUN</div>
                  <div className="slider-description">2024, Action</div>
                </div>
            ))}
             </div>
          </div>
          <div className="overlay-content-7" >
            <button id="home-show-button">Show More</button>
          </div>  
        </div>
        <div className="overlay-content-8">
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
