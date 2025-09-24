import { useParams, Link } from 'react-router-dom';

// Mock de produtos
const sampleProducts = [
  { id: '1', name: 'Produto A', description: 'Descrição do Produto A', price: '$10' },
  { id: '2', name: 'Produto B', description: 'Descrição do Produto B', price: '$20' },
  { id: '3', name: 'Produto C', description: 'Descrição do Produto C', price: '$30' },
];

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = sampleProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div>
        <h2>Produto não encontrado!</h2>
        <Link to="/products">Voltar para Produtos</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Preço: {product.price}</p>
      <p>ID do Produto (da URL): {productId}</p>
      <Link to="/products">Voltar para Produtos</Link>
    </div>
  );
};

export default ProductDetailPage;
