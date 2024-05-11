import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Loader from "../Components/loader";
import CoverVid from "../images/spiderman.mp4";
import Slider from "../Components/sliders";
import MovieCover1 from "../images/movie_collage.jpg";
import MovieCover2 from "../images/movie_collage2.jpg";
import MovieCover3 from "../images/movie_collage3.jpg";
import Poster from "../images/cover.jpg";

export default function Home() {
  const items = ["A", "B", "C", "C", "C", "C", "C"];
  const [size,setSize]=useState(0);
  const [display,setDisplay]=useState(0);
  const [flag, setFlag] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  var element=["","","","","","","",""];

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
    element[0] = document.getElementsByClassName("overlay-content-1")[0];
      element[1] = document.getElementsByClassName("overlay-content-2")[0];
      element[2] = document.getElementsByClassName("overlay-content-3")[0];
      element[3] = document.getElementsByClassName("overlay-content-4")[0];
      element[4] = document.getElementsByClassName("overlay-content-5")[0];
      element[5] = document.getElementsByClassName("overlay-content-6")[0];
      element[6] = document.getElementsByClassName("overlay-content-7")[0];
      element[7] = document.getElementsByClassName("overlay-content-8")[0];
    if (screenWidth < 600) {
      // Handle mobile screens
      setDisplay(2);
      element[0].style.top = "0px";
      element[1].style.top = "100px";
      document.getElementById("cover-title").style.fontSize="30px";
      document.getElementById("cover-description").style.fontSize="15px";
      document.getElementById("cover-description").style.width="50vw";
      element[2].style.top = "300px";
      element[3].style.top = "700px";
      element[4].style.top = "950px";
      element[5].style.top = "1350px";
      element[6].style.top = parseInt(element[5].style.top.slice(0,4))+2400+(700*0)+"px";
      element[7].style.top = parseInt(element[6].style.top.slice(0,4))+100+"px";
      
    } else if (screenWidth >= 600 && screenWidth <= 800) {
      // Handle tablet screens
      setDisplay(3);
      element[0].style.top = "0px";
      element[1].style.top = "100px";
      element[2].style.top = "450px";
      element[3].style.top = "850px";
      element[4].style.top = "1200px";
      element[5].style.top = "1600px";
      element[6].style.top = parseInt(element[5].style.top.slice(0,4))+1050+(700*0)+"px";
      element[7].style.top = parseInt(element[6].style.top.slice(0,4))+100+"px";

    }else if (screenWidth >= 800 && screenWidth <= 1024) {
      // Handle tablet screens
      setDisplay(4);
      element[0].style.top = "0px";
      element[1].style.top = "100px";
      element[2].style.top = "400px";
      element[3].style.top = "800px";
      element[4].style.top = "1400px";
      element[5].style.top = "1800px";
      element[6].style.top = parseInt(element[5].style.top.slice(0,4))+1050+(700*0)+"px";
      element[7].style.top = parseInt(element[6].style.top.slice(0,4))+100+"px";

    }else if (screenWidth > 1024 && screenWidth <= 1200) {
      // Handle laptop screens
      setDisplay(5);
      element[0].style.top = "0px";
      element[1].style.top = "300px";
      element[2].style.top = "600px";
      element[3].style.top = "1000px";
      element[4].style.top = "1450px";
      element[5].style.top = "1850px";
      element[6].style.top = parseInt(element[5].style.top.slice(0,4))+800+(700*0)+"px";
      element[7].style.top = parseInt(element[6].style.top.slice(0,4))+100+"px";

    }
    else if (screenWidth > 1200 && screenWidth <= 1440) {
      // Handle laptop screens
      setDisplay(6);
      element[0].style.top = "0px";
      element[1].style.top = "300px";
      element[2].style.top = "600px";
      element[3].style.top = "1000px";
      element[4].style.top = "1450px";
      element[5].style.top = "1850px";
      element[6].style.top = parseInt(element[5].style.top.slice(0,4))+800+(700*0)+"px";
      element[7].style.top = parseInt(element[6].style.top.slice(0,4))+100+"px";

    } else if (screenWidth > 1440) {
      // Handle desktop screens
      setDisplay(7);
      element[0].style.top = "0px";
      element[1].style.top = "300px";
      element[2].style.top = "600px";
      element[3].style.top = "1000px";
      element[4].style.top = "1450px";
      element[5].style.top = "1850px";
      element[6].style.top = parseInt(element[5].style.top.slice(0,4))+800+(700*0)+"px";
      element[7].style.top = parseInt(element[6].style.top.slice(0,4))+100+"px";
    }

  }, [screenWidth]); // Run this effect whenever screenWidth changes
   

  if (flag === 1) {
    return (
      <>
        <div className="video-container bor">
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
                exposed secret identity as Peter Parker. 
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
            <div className="bor mt-4 container justify-center items-center">
              <div className="home-box item">
                <div>
                  The Best <br />
                  Mystical Shows
                </div>
                <div>
                  <img src={MovieCover1} alt=""/>
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
       
          <div className="overlay-content-8">
            <Footer></Footer>
          </div>
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
