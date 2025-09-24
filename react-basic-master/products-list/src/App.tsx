import './App.css';
import ProductList from './components/products-list/ProductList';

// Para uma chave (key) mais robusta, é melhor ter um ID único no produto.
// Usar o índice (i) como chave pode causar problemas de renderização se a lista for dinâmica.
const products = Array.from({ length: 9 }, (_, i) => ({
  id: `prod_${i + 1}`, // Adicionando um ID único
  name: `Smartphone XYZ #${i + 1}`,
  price: 'R$ 999,99',
  description: 'O smartphone XYZ é repleto de recursos incríveis para atender às suas necessidades diárias.'
}));

function App() {
  return (
    <div className="app-bg">
      <h1 className="products-title">Lista de Produtos</h1>

      {/* 
        A renderização foi centralizada no componente ProductList.
        Isso torna o App.tsx mais limpo e o ProductList reutilizável.
      */}
      <ProductList items={products} />
    </div>
  );
}

export default App;
