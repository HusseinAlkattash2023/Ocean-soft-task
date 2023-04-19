import React from 'react';

import "./Card.scss"
import image1 from "../../assets/image1.png";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

// import images
import product1 from "../../assets/image1.png";
import product2 from "../../assets/image2.png";
import product3 from "../../assets/image3.png";
import product4 from "../../assets/image4.png";
import product5 from "../../assets/image5.png";
import product6 from "../../assets/image6.png";
import product7 from "../../assets/image7.png";
import product8 from "../../assets/image8.png";
import product9 from "../../assets/image9.png";
import product10 from "../../assets/image10.png";




const Card = ({image, name, price, rating}) => {

  return (
    <div className="card">
        <img src={require(`../../assets/${image}`)} alt=""/>
        <div className="body">
        <h3>{name}</h3>
        <span>{price} SYR</span>
        <div className="rating">
        {(() => {
            const arr = [];
            for (let i = 0; i < rating; i++) {
                arr.push(
                    <div>
                        <BsStarFill style={{color:"rgb(255, 166, 0)"}}/>
                    </div>
                );
            }
            for (let i = 0; i < 5-rating; i++) {
                arr.push(
                    <div>
                        <BsStar style={{color:"rgb(255, 166, 0)"}}/>
                    </div>
                );
            }
            return arr;
        })()}
        </div>
        </div>
    </div>
  )
}

export default Card