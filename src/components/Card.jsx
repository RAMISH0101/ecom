import React from 'react';

function Card({ image, description, title }) {
  return (
    <div style={{ float: 'left' }} className="card w-96 bg-base-100 shadow-xl mx-6 my-6">
      <figure><img src={image} alt={title} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
