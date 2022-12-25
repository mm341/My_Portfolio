import React from "react";
import "./Portfolio.css";
import MovieApp from "../../imgs/WhatsApp Image 2022-12-25 at 02.02.56.jpg";
import Tesla from "../../imgs/WhatsApp Image 2022-12-25 at 02.03.45.jpg";
import Portfolio2 from "../../imgs/WhatsApp Image 2022-12-25 at 02.05.08.jpg";
import Ecommerce from "../../imgs/WhatsApp Image 2022-12-25 at 02.05.54.jpg";
import { useSelector } from "react-redux";
import Slider from "react-slick";
const Portfolio = () => {
  // state
  const {mode}=useSelector((state)=>state.darkMode);
  const settings={
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
   
    {
      breakpoint: 738,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: mode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      
      <Slider {...settings}>
          <a target="_blank" href="https://mm341.github.io/Movies--project/">
          <img src={MovieApp} alt="" />
          </a>
        <a target="_blank" href="https://mm341.github.io/Tesla-Clone/"> <img src={Tesla} alt="" /></a>
          <a target="_blank" href="https://mm341.github.io/Ecommerce-Site/"><img src={Portfolio2} alt="" /></a>
          <a target="_blank" href="https://mm341.github.com/My_Portfolio/"><img src={Ecommerce} alt="" /></a>
        </Slider>
    </div>
  );
};

export default Portfolio;