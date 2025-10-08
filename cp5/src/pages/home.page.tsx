import { useEffect, useState } from "react"
import type { Article } from "../interfaces/article.interface"
import { data } from "../service/data"
import { ArticleComponents } from "../components/Article"

export const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>(data) 
  const [searchText, setSearchText] = useState('')

  const filterArticles = (text: string) => {
    if (text === '') {
      setArticles(data)
      return
    }

    const newData = data.filter(article => {
      return article.title.toLowerCase().includes(text.toLowerCase()) || article.content.toLowerCase().includes(text.toLowerCase()) || article.categories.some(category => category.toLowerCase().includes(text.toLowerCase()))
    })
    setArticles(newData)
  }

  useEffect(() => {
    filterArticles(searchText)
  }, [searchText])

  return (<>
    <main>
      <h1>Artigos</h1>
      <div className="my-4">
        <input
          type='text'
          name='search'
          id='search'
          placeholder="Buscar..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {articles.length === 0 && <p>Nenhum artigo encontrado.</p>}
        {articles?.length ? articles.map(article => (
          <li key={article.id}>
            <ArticleComponents article={article} />
          </li>
        )) : null}
      </ul>
    </main>
  </>)
}