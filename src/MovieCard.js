import React from 'react';
import './MovieCard.css';

// const RateStars = ({number}) => {
//     let result = []
//     for (let index = 0; index < number; index++) {
//         (result.push (<i className="far fa-star star"></i>) )
//     }

//     while (result.length < 5) {

//         (result.push(<i className="far fa-star stars"></i>
//         ))
//     }
//     return {result}
    
// }
const Rate = ({ number }) => {
    let rate = "";
    for (let i = 0; i < number; i++) {
      rate += "★";
    }
  
    rate = rate.padEnd(5, "☆");
  
    return <span className="movie-rating">{rate}</span>;
  };

  const MovieCard = (props) =>{
    const {rating, image, title, productionyear} =props
    return (
        <div className="movie-card">
        <Rate number={rating} />
           
        <div className="image-container">
            <img alt="movie image" src={image} />
        </div>
        <div className="description">
            <span>{title}-{productionyear}</span>
    
        </div>
        <div className="delete-btn">
        <button>X</button>
        </div>
        
    </div>
    )
}

export default MovieCard;