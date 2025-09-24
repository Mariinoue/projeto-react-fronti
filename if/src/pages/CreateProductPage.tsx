import React, { useState, useCallback, useMemo } from 'react';
import type { Product, ProductFormData } from '../types/product';

// Define a interface para as propriedades que o componente CreateProductPage recebe.
interface CreateProductPageProps {
  // Função a ser chamada quando um novo produto for adicionado com sucesso.
  onAddProduct: (product: Product) => void;
  // Função a ser chamada quando o usuário clica no botão "Cancelar".
  onCancel: () => void;
}

// Componente funcional CreateProductPage, tipado com React.FC (Function Component).
// Ele é responsável por renderizar o formulário de criação de produtos.
export const CreateProductPage: React.FC<CreateProductPageProps> = ({ 
  onAddProduct, 
  onCancel 
}) => {
  // Estado para armazenar os dados do formulário (nome, descrição, preço).
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: ''
  });
  // Estado para armazenar as mensagens de erro de validação do formulário.
  const [errors, setErrors] = useState<Partial<ProductFormData>>({});

  // Função para lidar com a mudança de valores nos campos de input e textarea.
  // `useCallback` é usado para memoizar a função, evitando que ela seja recriada a cada renderização,
  // a menos que suas dependências (neste caso, `errors`) mudem.
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Atualiza o estado do formulário com o novo valor do campo.
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpa o erro associado ao campo assim que o usuário começa a digitar nele.
    if (errors[name as keyof ProductFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  // Função para validar os dados do formulário.
  // `useCallback` memoiza a função, recriando-a apenas se `formData` mudar.
  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<ProductFormData> = {};

    // Valida se o nome do produto não está vazio.
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    // Valida se a descrição não está vazia.
    if (!formData.description.trim()) {
      newErrors.description = 'Descrição é obrigatória';
    }

    // Valida se o preço não está vazio.
    if (!formData.price.trim()) {
      newErrors.price = 'Preço é obrigatório';
    } else {
      // Valida se o preço é um número positivo.
      const priceNumber = parseFloat(formData.price.replace(',', '.'));
      if (isNaN(priceNumber) || priceNumber <= 0) {
        newErrors.price = 'Preço deve ser um número positivo';
      }
    }

    // Atualiza o estado de erros e retorna se o formulário é válido (sem erros).
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Função para lidar com a submissão do formulário.
  // `useCallback` memoiza a função, recriando-a se `validateForm`, `formData` ou `onAddProduct` mudarem.
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Se a validação falhar, interrompe a submissão.
    if (!validateForm()) {
      return;
    }
    // Cria um novo objeto de produto com os dados do formulário.
    const newProduct: Product = {
      id: Date.now().toString(), // ID simples baseado em timestamp
      name: formData.name.trim(),
      description: formData.description.trim(),
      price: parseFloat(formData.price.replace(',', '.'))
    };

    // Chama a função `onAddProduct` passada via props para adicionar o novo produto.
    onAddProduct(newProduct);
    
    // Limpa os campos do formulário após a submissão bem-sucedida.
    setFormData({
      name: '',
      description: '',
      price: ''
    });
  }, [validateForm, formData, onAddProduct]);

  // `useMemo` é usado para calcular um valor (se o botão de submit deve estar desabilitado).
  // Este cálculo só é refeito se `formData` mudar, otimizando a performance.
  // O botão é desabilitado se todos os campos estiverem vazios.
  const isSubmitDisabled = useMemo(() => {
    return !formData.name && !formData.description && !formData.price;
  }, [formData]);

  // Renderização do componente JSX.
  return (
    <div className="create-product-page">
      <header className="page-header">
        <h1>Adicionar Novo Produto</h1>
      </header>

      <main className="form-container">
        {/* Formulário com o manipulador de submissão `handleSubmit` */}
        <form onSubmit={handleSubmit} className="product-form">
          {/* Grupo de campo para o nome do produto */}
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
            {/* Exibe a mensagem de erro se houver */}
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          {/* Grupo de campo para a descrição do produto */}
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
            {/* Exibe a mensagem de erro se houver */}
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>

          {/* Grupo de campo para o preço do produto */}
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
            {/* Exibe a mensagem de erro se houver */}
            {errors.price && <span className="error-message">{errors.price}</span>}
          </div>

          {/* Botões de ação do formulário */}
          <div className="form-actions">
            {/* Botão para cancelar a operação, chama a função `onCancel` */}
            <button type="button" onClick={onCancel} className="cancel-button">
              Cancelar
            </button>
            {/* Botão para submeter o formulário, desabilitado se `isSubmitDisabled` for true */}
            <button type="submit" className="submit-button" disabled={isSubmitDisabled}>
              Criar Produto
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
