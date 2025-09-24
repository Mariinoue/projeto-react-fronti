import React from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard';
import type { Product } from '../types/product';

interface ProductsPageProps {
  products: Product[];
  onNavigateToCreate: () => void;
  onDeleteProduct: (id: string) => void;
  onEditProduct: (id: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  products,
  onNavigateToCreate,
  onDeleteProduct,
  onEditProduct
}) => {
  return (
    <div className="products-page">
      <header className="page-header">
        <h1>Catálogo de Produtos</h1>
        <button onClick={onNavigateToCreate} className="add-button">
          ➕ Adicionar Produto
        </button>
      </header>

      <main className="products-container">
        {products.length === 0 ? (
          <div className="empty-state">
            <p>Não há produtos disponíveis</p>
            <button onClick={onNavigateToCreate} className="create-first-button">
              Criar primeiro produto
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard
                onEdit={() => onEditProduct(product.id)}
                key={product.id}
                product={product}
                onDelete={onDeleteProduct}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
