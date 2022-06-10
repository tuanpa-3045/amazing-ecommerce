import React from "react";
import "../styles.scss";

function CardItem({ product }) {
  const star = 5;
  const Rate = (rating) => {
    let stars = [];
    for (let i = 0; i < star; i++) {
      if (i < rating) {
        stars.push(<i className="fa fa-star" key={i} />);
      } else {
        stars.push(<i className="far fa-star" key={i} />);
      }
    }
    return stars;
  };
  return (
    <div className="col-12 col-md-6 col-xl-3">
      <div className="product-item">
        <div className="product-item__img" style={{ "--aspect-ratio": "16/9" }}>
          <img src={product?.image} alt="product-item" />
        </div>
        <div className="product-item__content">
          <div className="product-item__name">{product?.name}</div>
          <div className="product-item__price">${product?.price}</div>
          <div className="product-item__rating">
            <span className="rating">{Rate(product?.rating)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
