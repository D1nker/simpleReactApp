import React from 'react';
import '../../assets/css/App.css';

const Products = (props) => {
  return (
    <div className="App-products">
      {props.children}
    </div>
  );
}

export default Products;
