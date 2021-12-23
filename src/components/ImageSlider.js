import React, { useState } from 'react'
import { SliderData } from './SliderData';
import { CgChevronRightO } from "react-icons/cg"
import { CgChevronLeftO } from "react-icons/cg"
import styled from 'styled-components';

const Image = styled.img`
    width: 400px;
    float: center;
    box-shadow: 8px 10px 16px 0 rgb(0 0 0 / 20%)
    margin-bottom: 30px;
`;

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
    }
  
    if(!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
      <section>
        <CgChevronLeftO  id="left-arrow" onClick={prevSlide} />
        <CgChevronRightO id="right-arrow" onClick={nextSlide}/>
        {SliderData.map((slide, index) => {
          return (
            <div 
            className={index === current ? "slide active" : "slide"}
            key={index}
            >
              {index === current && (
              <Image src={slide.image} alt="carousel image" className="image" />
              )}
            </div>
          )
        })}
      </section>
    )
  };
  
  export default ImageSlider