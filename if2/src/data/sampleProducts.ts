import type { Product } from '../types/product';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Smartphone Galaxy Pro',
    description: 'Smartphone com tela de 6.7 polegadas, câmera de 108MP e 256GB de armazenamento. Ideal para uso profissional e pessoal.',
    price: 2599.99
  },
  {
    id: '2',
    name: 'Notebook Gamer Ultra',
    description: 'Notebook gamer com processador Intel i7, 16GB RAM, SSD 1TB e placa de vídeo RTX 4060. Perfeito para jogos e trabalho.',
    price: 4999.90
  },
  {
    id: '3',
    name: 'Fone Bluetooth Premium',
    description: 'Fone de ouvido sem fio com cancelamento de ruído ativo, 30 horas de bateria e qualidade de som Hi-Fi.',
    price: 599.50
  }
];

// Função para inicializar produtos exemplo no localStorage (se não existir)
export const initializeSampleProducts = () => {
  const existingProducts = localStorage.getItem('products');
  if (!existingProducts) {
    localStorage.setItem('products', JSON.stringify(sampleProducts));
  }
};
