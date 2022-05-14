import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/carousel/01.jpg';
import img2 from '../img/carousel/02.jpg';
import img3 from '../img/carousel/03.jpg';
const CarouselImage = () => {
    return ( 
        <Carousel style={{margin:'auto', height: '40%',width: '75%',   borderRadius:'5px'}} variant="dark">
  <Carousel.Item style={{borderRadrius:'5%', }}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      style={{borderRadrius:'5%'}}
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
     );
}
 
export default CarouselImage;