import React from 'react';

const ProductCard = (props) => {
  return (
    <div className="App-card">
      {/* <img alt="kitten" src={props.contact.imgUrl}/> */}
      <h3>{props.name}</h3>
      <p>Price: {props.price}</p>
      <p>Description: {props.description}</p>
    </div>
  )
}

export default ProductCard
