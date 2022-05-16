import React from 'react';
import ProductForm from './ProductForm';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ products, setProducts }) => {
  const navigate = useNavigate();
  const handleOnSubmit = product => {
    setProducts([product, ...products]);
    navigate('/');
  };

  return (
    <>
      <ProductForm handleOnSubmit={handleOnSubmit} />
    </>
  );
};

export default AddProduct;
