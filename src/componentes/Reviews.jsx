import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';


function ReviewsCarousel() {
  const reviews = [
    {
      id: 1,
      author: "Cristina",
      content: "Fui al taller de Maria José y me encantaron sus creaciones. Gracias por el asesoramiento!",
      rating: 5
    },
    {
      id: 2,
      author: "Jeremías",
      content: "Le compré un regalo a mi mamá y quedó encantada. Gracias!",
      rating: 5
    },
    {
      id: 3,
      author: "Marcela",
      content: "Me compré un portasahumerio hermoso!",
      rating: 5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="reviews-carousel">
      <h2>Reseñas</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <p>{review.content}</p>
            <h4>- {review.author}</h4>
            <p> 
            {Array(review.rating).fill().map((_, i) => (<FaStar key={i} style={{ color: '#FFD700' }} /> ))}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ReviewsCarousel;
