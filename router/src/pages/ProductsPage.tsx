import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { initializeSampleProducts } from '../data/sampleProducts';
import type { Product } from '../types/product';

export const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Carregar produtos do localStorage quando o componente monta
  useEffect(() => {
    // Inicializar produtos exemplo se não existirem
    initializeSampleProducts();
    
    const savedProducts = localStorage.getItem('products');
    
    if (savedProducts) {
      try {
        const parsedProducts = JSON.parse(savedProducts);
        setProducts(parsedProducts);
      } catch (error) {
        console.error('Erro ao carregar produtos do localStorage:', error);
        setProducts([]);
      }
    }
    setIsInitialized(true);
  }, []);

  // Salvar produtos no localStorage apenas após a inicialização e quando a lista mudar
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products, isInitialized]);

  const handleDeleteProduct = (id: string) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  return (
    <div className="products-page">
      <header className="page-header">
        <h1>Catálogo de Produtos</h1>
        <Link to="/create" className="add-button">
          ➕ Adicionar Produto
        </Link>
      </header>

      <main className="products-container">
        {products.length === 0 ? (
          <div className="empty-state">
            <p>Não há produtos disponíveis</p>
            <Link to="/create" className="create-first-button">
              Criar primeiro produto
            </Link>
          </div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onDelete={handleDeleteProduct}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
