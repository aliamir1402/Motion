import React, { Component } from "react";
import Slider from "react-slick";
import Poster from "../images/cover.jpg";
import Poster2 from "../images/inception.jpg";

function SwipeToSlide(props) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: parseInt(props.display),
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="slider-container" style={{ width: "90vw" }}>
      <Slider {...settings}>
        <div className="slider-box pr-1 pl-1">
          <div>
            <img src={Poster} alt="" />
          </div>
          <div className="slider-title">SHOGUN</div>
          <div className="slider-description">2024, Action</div>
        </div>
        <div className="slider-box pr-1 pl-1">
          <div>
            <img src={Poster2} alt="" />
          </div>
          <div className="slider-title">Title</div>
          <div className="slider-description">Year, Genre</div>
        </div>
        <div className="slider-box pr-1 pl-1">
          <div>
            <img src={Poster} alt="" />
          </div>
          <div className="slider-title">Title</div>
          <div className="slider-description">Year, Genre</div>
        </div>
        <div className="slider-box pr-1 pl-1">
          <div>
            <img src={Poster2} alt="" />
          </div>
          <div className="slider-title">Title</div>
          <div className="slider-description">Year, Genre</div>
        </div>
        <div className="slider-box pr-1 pl-1">
          <div>
            <img src={Poster} alt="" />
          </div>
          <div className="slider-title">Title</div>
          <div className="slider-description">Year, Genre</div>
        </div>
        <div className="slider-box pr-1 pl-1">
          <div>
            <img src={Poster2} alt="" />
          </div>
          <div className="slider-title">Title</div>
          <div className="slider-description">Year, Genre</div>
        </div>
        <div className="slider-box pr-1 pl-1">
          <div>
            <img src={Poster} alt="" />
          </div>
          <div className="slider-title">Title</div>
          <div className="slider-description">Year, Genre</div>
        </div>
        <div className="slider-box pr-1 pl-1">
          <div>
            <img src={Poster2} alt="" />
          </div>
          <div className="slider-title">Title</div>
          <div className="slider-description">Year, Genre</div>
        </div>
        <div className="slider-box pr-1 pl-1">
          <div>
            <img src={Poster} alt="" />
          </div>
          <div className="slider-title">Title</div>
          <div className="slider-description">Year, Genre</div>
        </div>
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
