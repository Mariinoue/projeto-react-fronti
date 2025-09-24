import React from 'react';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onDelete: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Tem certeza que deseja deletar o produto "${product.name}"?`)) {
      onDelete(product.id);
    }
  };

  return (
    <div className="product-card">
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <button 
            className="delete-button"
            onClick={handleDelete}
            aria-label={`Deletar produto ${product.name}`}
          >
            🗑️ Deletar
          </button>
        </div>
      </div>
    </div>
  );
};
