import React, { useState, useCallback, useMemo, useEffect } from 'react';
import type { Product, ProductFormData } from '../types/product';

// Define a interface para as propriedades que o componente EditProductPage recebe.
interface EditProductPageProps {
  // O produto que será editado.
  productToEdit: Product;
  // Função a ser chamada quando o produto for atualizado com sucesso.
  onUpdateProduct: (updatedProduct: Product) => void;
  // Função a ser chamada quando o usuário clica no botão "Cancelar".
  onCancel: () => void;
}

export const EditProductPage: React.FC<EditProductPageProps> = ({
  productToEdit,
  onUpdateProduct,
  onCancel,
}) => {
  // Estado para armazenar os dados do formulário.
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: '',
  });
  // Estado para armazenar as mensagens de erro de validação.
  const [errors, setErrors] = useState<Partial<ProductFormData>>({});

  // `useEffect` para preencher o formulário com os dados do produto quando o componente for montado.
  useEffect(() => {
    if (productToEdit) {
      setFormData({
        name: productToEdit.name,
        description: productToEdit.description,
        price: productToEdit.price.toString().replace('.', ','),
      });
    }
  }, [productToEdit]);

  // Função para lidar com a mudança de valores nos campos.
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ProductFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  // Função para validar o formulário.
  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<ProductFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.description.trim()) newErrors.description = 'Descrição é obrigatória';
    if (!formData.price.trim()) {
      newErrors.price = 'Preço é obrigatório';
    } else {
      const priceNumber = parseFloat(formData.price.replace(',', '.'));
      if (isNaN(priceNumber) || priceNumber <= 0) {
        newErrors.price = 'Preço deve ser um número positivo';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Função para lidar com a submissão do formulário.
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const updatedProduct: Product = {
      ...productToEdit, // Mantém o ID original
      name: formData.name.trim(),
      description: formData.description.trim(),
      price: parseFloat(formData.price.replace(',', '.')),
    };

    onUpdateProduct(updatedProduct);
  }, [validateForm, formData, productToEdit, onUpdateProduct]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <header className="w-full max-w-2xl flex justify-between items-center mb-8 pb-4 border-b-2 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800">Editar Produto</h1>
      </header>

      <main className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Nome */}
          <div>
            <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-2">Nome do Produto *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Digite o nome do produto"
            />
            {errors.name && <span className="text-red-600 text-sm font-medium mt-1">{errors.name}</span>}
          </div>

          {/* Campo Descrição */}
          <div>
            <label htmlFor="description" className="block text-base font-semibold text-gray-700 mb-2">Descrição *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Digite a descrição do produto"
              rows={4}
            />
            {errors.description && <span className="text-red-600 text-sm font-medium mt-1">{errors.description}</span>}
          </div>

          {/* Campo Preço */}
          <div>
            <label htmlFor="price" className="block text-base font-semibold text-gray-700 mb-2">Preço (R$) *</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="0,00"
            />
            {errors.price && <span className="text-red-600 text-sm font-medium mt-1">{errors.price}</span>}
          </div>

          {/* Botões de Ação */}
          <div className="flex justify-end items-center gap-4 pt-5">
            <button type="button" onClick={onCancel} className="px-6 py-3 text-base font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300">
              Cancelar
            </button>
            <button type="submit" className="px-6 py-3 text-base font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 transform hover:-translate-y-0.5">
              Salvar Alterações
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};