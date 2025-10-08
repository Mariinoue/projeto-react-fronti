import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import type { Article } from "../interfaces/article.interface"
import { data } from "../service/data"
import type { Comment } from "../interfaces/commet.interface"
import { CommentComponent } from "../components/Comment"

export const ArticlePage = () => {
  const { id } = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    const myArticle = data.find((item) => item.id === Number(id)) || null
    setArticle(myArticle)
    setComments(
      myArticle?.comments || []
    )
  }, [id])


  if (!article) {
    return <p>Artigo não encontrado.</p>
  }

  return (
    <article className="container mx-auto px-4 pb-4">
      <h1 className="text-3xl font-bold my-4">{article.title}</h1>
      <figure className="relative w-full max-h-80 overflow-hidden mb-4 items-center justify-center flex">
        <img
          src={article.img}
          alt={article.title}
          width={1250}
          height={1250}
          className="object-cover w-full"
        />
      </figure>
      <p className="text-gray-600">{article.content}</p>
      <p className="text-sm text-gray-500 mt-2">
        {new Date(article.date).toLocaleDateString()}
      </p>

      <div className="mt-4">
        {article.categories.map((category) => (
          <span
            key={category}
            className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
          >
            {category}
          </span>
        ))}
      </div>
      <div className='mt-4'>
        <h2 className="text-2xl font-bold mb-4">Comentários</h2>
        {comments.length === 0 && <p>Nenhum comentário ainda.</p>}
        {comments.map((comment) => <CommentComponent key={comment.id} comment={comment} />)}
      </div>
      <Link className='mt-4' to="/">
        Voltar para a home
      </Link>
    </article>
  )
}