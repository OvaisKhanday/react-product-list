import React, { useState } from "react";
import { type Product } from "../types/Product";
import productsData from "../lib/products";
import "./ProductList.styles.css";

const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts: Product[] = productsData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='container'>
      <h2>Product List</h2>
      <input
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='search-input'
      />

      <ul className='product-list'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className='card'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className='price'>${product.price.toFixed(2)}</p>
            </li>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </div>
  );
};
export default ProductList;
