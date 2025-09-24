import React from 'react';
import type { Product } from './types/product';


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
  onEditProduct,
}) => {
  // Função para formatar o preço para o padrão brasileiro
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      {/* Cabeçalho da página */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b-2 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          Lista de Produtos
        </h1>
        <button
          onClick={onNavigateToCreate}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-transform transform hover:-translate-y-0.5"
        >
          Adicionar Produto
        </button>
      </header>

      <main>
        {products.length > 0 ? (
          // Grid de produtos
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {product.description}
                  </p>
                  <div className="mt-auto flex justify-between items-center">
                    <p className="text-lg font-semibold text-green-600">
                      {formatPrice(product.price)}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => onEditProduct(product.id)}
                        className="px-4 py-2 bg-yellow-500 text-white text-xs font-bold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => onDeleteProduct(product.id)}
                        className="px-4 py-2 bg-red-500 text-white text-xs font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-colors"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Estado vazio, quando não há produtos
          <div className="text-center py-16 px-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Nenhum produto cadastrado
            </h2>
            <p className="text-gray-500 mb-6">
              Parece que você ainda não adicionou nenhum produto. Que tal
              começar agora?
            </p>
            <button
              onClick={onNavigateToCreate}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-transform transform hover:-translate-y-0.5"
            >
              Criar meu primeiro produto
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductsPage;