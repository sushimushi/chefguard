import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'; 
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import './mainBanner.css'

function MainBanner() {
  const [index, setIndex] = useState(0);

  const yourArray = [
    { imageUrl: "./src/assets/images/main-offer-banner.jpg" },
    { imageUrl: "./src/assets/images/main-offer-banner.jpg" },
    { imageUrl: "./src/assets/images/main-offer-banner.jpg" },
  ];


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
     {yourArray.map((item, index) => (
        <Carousel.Item key={index}>
          <Image className='main-banner' src={item.imageUrl} alt={`Slide ${index + 1}`} />
          <Carousel.Caption>
            <h3>{`Slide ${index + 1} label`}</h3>
            <p>{`Some text for slide ${index + 1}. Replace this with your content.`}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MainBanner;