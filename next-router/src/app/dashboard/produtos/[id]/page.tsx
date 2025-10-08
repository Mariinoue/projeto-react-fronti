interface ProdutosPageProps {
  params: { id: string }
}

export default async function ProdutoPage({ params }: ProdutosPageProps) {
  const { id } = await params

  return (
    <div>
      <h1>Produto Unico</h1>
      <p>Produto ID: {id}</p>
    </div>
  );
}
