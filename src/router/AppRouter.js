import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import AddProduct from '../components/Products/AddProduct';
import ProductsList from '../components/Products/Productslist';
import EditProduct from '../components/Products/EditProduct';

import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
  const [products, setProducts] = useLocalStorage('products', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              exact={true}
              element={
                <ProductsList products={products} setProducts={setProducts} />
              }
            />

            <Route
              path="/add"
              element={
                <AddProduct products={products} setProducts={setProducts} />
              }
            />
            <Route
              path="/edit/:id"
              element={
                <EditProduct products={products} setProducts={setProducts} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
