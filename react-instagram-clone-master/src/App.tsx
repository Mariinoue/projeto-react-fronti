import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/Home.page"
import NotFoundPage from "./pages/NotFound/NotFound.page"
import UserPage from "./pages/User/User.page"
import PostPage from "./pages/Post/Post.page"
import Header from "./components/Header/Header.component"
import Footer from "./components/Footer/Footer.component"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="mx-auto p-4 w-full h-full overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:username" element={<UserPage />} />
          <Route path="/p/:id" element={<PostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
