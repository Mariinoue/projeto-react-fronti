import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/home.page'
import { ArticlePage } from './pages/article.page'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/article/:id' element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
