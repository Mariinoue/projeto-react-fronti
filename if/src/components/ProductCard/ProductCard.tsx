import React from 'react';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete, onEdit }) => {
  const handleDelete = () => {
    if (window.confirm(`Tem certeza que deseja deletar o produto "${product.name}"?`)) {
      onDelete(product.id);
    }
  };

  const handleEdit = () => {
    onEdit(product.id);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-lg font-semibold text-green-600">
            {formatPrice(product.price)}
          </span>
          <div className="flex gap-2">
            <button onClick={handleEdit} className="px-4 py-2 bg-yellow-500 text-white text-xs font-bold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors" aria-label={`Editar produto ${product.name}`}>
              ✏️ Editar
            </button>
            <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white text-xs font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors" aria-label={`Deletar produto ${product.name}`}>
              🗑️ Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
