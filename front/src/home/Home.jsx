import React from "react";
import Anuncio from "../anuncios/Anuncio";
import {ListaProdutos} from "../listaProdutos/ListaProdutos";
import Recomendation from "../shared/Recomendation";
import CarouselImage from "./CarouselImage";

const Home = () => {
    
    return (
      <>
        <CarouselImage />
        <ListaProdutos />
      </>
    );
  }

  
  export default Home;