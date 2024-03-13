// import { useState } from 'react';
import '../css/card.css';

export const Card = ({product}) => {

    return (
        <div className="card">
            <img className="card-image" src={product.image} alt={product.title} />
            <hr />
            <h3 className="card-title">{product.title}</h3>
            <p className="card-description">{product.description}</p>
            <p className="price">${product.price}</p>

            <button className="card-button">Add to Cart</button>
        </div>
    )
}