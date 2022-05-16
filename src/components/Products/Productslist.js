import React from 'react';
import _ from 'lodash';
import Product from './Product.js';

const ProductList = ({ products, setProducts }) => {
  const handleRemoveProduct = id => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <React.Fragment>
      <div className="product-list">
        {!_.isEmpty(products) ? (
          products.map(product => (
            <Product
              key={product.id}
              {...product}
              handleRemoveProduct={handleRemoveProduct}
            />
          ))
        ) : (
          <p className="message">No products available. Please add products.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductList;
