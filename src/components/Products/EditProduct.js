import React from 'react';
import ProductForm from './ProductForm';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ProductToEdit = products.find(product => product.id === id);

  const handleOnSubmit = product => {
    const filteredProducts = products.filter(product => product.id !== id);
    setProducts([product, ...filteredProducts]);
    navigate('/');
  };

  return (
    <div>
      <ProductForm product={ProductToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditProduct;
