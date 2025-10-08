import { Link } from "react-router-dom"
import type { Article } from "../interfaces/article.interface"

interface ArticleProps {
  article: Article
}

export const ArticleComponents = ({ article }: ArticleProps) => {
  return (
    <Link to={`/article/${article.id}`} className='border border-gray-300 rounded-lg p-4 flex flex-col h-full transition transform hover:scale-105 hover:shadow-lg'>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <img src={article.img} alt={article.title} width={100} />
      <p>Data: {article.date.toDateString()}</p>
      <p>Categorias: {article.categories.join(", ")}</p>
    </Link>
  )
}