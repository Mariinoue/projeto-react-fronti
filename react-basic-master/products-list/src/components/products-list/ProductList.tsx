import React from 'react';

import './ProductList.css';
import InteractiveCard from '../interactive-card/InteractiveCard';

interface Product {
  id: string; // Adicionando a propriedade id
  name: string;
  price: string;
  description: string;
}

interface ProductListProps {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="products-grid">
      {items.map((product) => (
        <InteractiveCard
          key={product.id} // Usando o ID do produto como chave, que é a melhor prática.
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
