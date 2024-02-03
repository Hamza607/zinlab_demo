"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className="border border-slate-600 w-[40px] absolute top-[40%] left-0 h-[40px] z-10 cursor-pointer rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      <IoIosArrowBack style={{ color: "black" }} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className="border border-slate-600 w-[40px] h-[40px]  absolute top-[40%] right-0 z-10 cursor-pointer rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      <IoIosArrowForward style={{ color: "black" }} />
    </div>
  );
};

const Card = () => {
  const cardData = [
    {
      image: require("../../assets/images/point.svg"),
      title: "PPT to PDF",
      description: "Convert Powerpoint to pdf Online.",
    },
    {
      image: require("../../assets/images/exel.svg"),
      title: "Exel to PDF",
      description: "Easily convert Exel spreadsheet to pdf online.",
    },
    {
      image: require("../../assets/images/jpg.svg"),
      title: "JPG to PDF",
      description: "Convert Jpg, Png to Pdf Online for free.",
    },
    {
      image: require("../../assets/images/txt.svg"),
      title: "TXT to PDF",
      description: "Convert TXT to Pdf Online for free.",
    },
    {
      image: require("../../assets/images/rtf.svg"),
      title: "RTF to PDF",
      description: "Convert RTF File to Pdf Online for free.",
    },
    {
      image: require("../../assets/images/pub.svg"),
      title: "PUB to PDF",
      description: "Convert Publisher to Pdf document.",
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <div className="h-[60vh] w-[95%] mx-auto ">
        <h1 className="text-2xl font-bold px-8 py-4">Convert to PDF</h1>
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="group transition-all ">
              <div className="border rounded px-4 py-6 hover:shadow-md w-[90%] cursor-pointer h-[240px] mx-auto">
                <div className="flex justify-between">
                  <Image src={card.image} alt="" width={100} height={100} />
                  <FaRegBookmark className="hidden group-hover:block" />
                </div>
                <h1 className="font-semibold text-xl py-2">{card.title}</h1>
                <p className="text-slate-400 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Card;
