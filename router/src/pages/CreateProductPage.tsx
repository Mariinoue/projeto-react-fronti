import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product, ProductFormData } from '../types/product';

export const CreateProductPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: ''
  });
  const [errors, setErrors] = useState<Partial<ProductFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name as keyof ProductFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ProductFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Descrição é obrigatória';
    }

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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Criar novo produto
    const newProduct: Product = {
      id: Date.now().toString(), // ID simples baseado em timestamp
      name: formData.name.trim(),
      description: formData.description.trim(),
      price: parseFloat(formData.price.replace(',', '.'))
    };

    // Carregar produtos existentes do localStorage
    const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
    
    // Adicionar novo produto
    const updatedProducts = [...existingProducts, newProduct];
    
    // Salvar no localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    // Redirecionar para a página de listagem
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="create-product-page">
      <header className="page-header">
        <h1>Adicionar Novo Produto</h1>
      </header>

      <main className="form-container">
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <label htmlFor="name">Nome do Produto *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? 'error' : ''}
              placeholder="Digite o nome do produto"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className={errors.description ? 'error' : ''}
              placeholder="Digite a descrição do produto"
              rows={4}
            />
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="price">Preço (R$) *</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className={errors.price ? 'error' : ''}
              placeholder="0,00"
            />
            {errors.price && <span className="error-message">{errors.price}</span>}
          </div>

          <div className="form-actions">
            <button type="button" onClick={handleCancel} className="cancel-button">
              Cancelar
            </button>
            <button type="submit" className="submit-button">
              Criar Produto
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
