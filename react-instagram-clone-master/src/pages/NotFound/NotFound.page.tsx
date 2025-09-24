import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Página não encontrada</p>
        <Link
          to="/"
          className="mt-6 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
