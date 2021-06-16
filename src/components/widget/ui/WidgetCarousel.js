import React, { useState } from "react";
import { CustomerLocalData } from "../../../CustomerLocalData";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import { CustomerCarouselCard } from "./Cards";

import { Carousel, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  {
    url: "Images/ship-1.jpg",
  },
  {
    url: "Images/ship-2.jpg",
  },
];

export const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/ship-slide-one.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="text-left md:mb-16 ">
          <h3 className="md:text-4xl text-sm">Example headline</h3>
          <p className="md:text-xl text-xs" style={{ color: "#cbd9ed" }}>
            Some representative placeholder content for the first slide of the
            carousel
          </p>
          <Button variant="primary" size="small">Know more</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/ship-slide-two.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="text-left md:mb-16 ">
          <h3 className="md:text-4xl text-sm">Example headline</h3>
          <p className="md:text-xl text-xs" style={{ color: "#cbd9ed" }}>
            Some representative placeholder content for the first slide of the
            carousel
          </p>
          <Button variant="primary" size="small">Know more</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/ship-slide-three.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="text-left md:mb-16 ">
          <h3 className="md:text-4xl text-sm">Example headline</h3>
          <p className="md:text-xl text-xs" style={{ color: "#cbd9ed" }}>
            Some representative placeholder content for the first slide of the
            carousel
          </p>
          <Button variant="primary" size="small">Know more</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export const CustomersCarousel = () => {
  const [current, setCurrent] = useState(0);

  const length = CustomerLocalData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="flex mx-w-6xl items-center justify-center relative">
      <div className="bg-blue-700 rounded-full absolute -left-7   w-14 h-14 items-center justify-center flex cursor-pointer">
        <IoArrowBackSharp
          className="text-white text-2xl "
          onClick={prevSlide}
        />
      </div>

      {CustomerLocalData.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <CustomerCarouselCard
                image={slide.url}
                title={slide.title}
                name={slide.name}
                intro={slide.intro}
              />
            )}
          </div>
        );
      })}
      <div className="bg-blue-700 rounded-full absolute -right-7 flex items-center justify-center w-14 h-14 cursor-pointer">
        <IoArrowForwardSharp
          className="text-white text-2xl "
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);

  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="flex md:mx-w-5xl items-center justify-center relative  md:p-0">
      <div className="bg-blue-700 absolute md:left-12 -left-5 rounded-full w-12   p-2 px-2 h-12  items-center justify-center flex cursor-pointer">
        <IoArrowBackSharp
          className="text-white text-2xl "
          onClick={prevSlide}
        />
      </div>

      {images.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div key={index} style={{ maxWidth: 828, height: 550 }}>
                <img src={slide.url} className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        );
      })}
      <div className="bg-blue-700 absolute md:right-12 -right-5 rounded-full w-12 p-2 px-2 h-12 flex items-center justify-center  cursor-pointer">
        <IoArrowForwardSharp
          className="text-white text-2xl "
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};
