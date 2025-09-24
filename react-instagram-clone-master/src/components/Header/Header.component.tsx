import { Link } from "react-router-dom"

const Header = () => {
  const username = "vinimarcili"

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-50 w-full">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            alt="Instagram Logo"
            className="h-8"
          />
        </Link>
      </div>

      {/* Link com foto para perfil do usuário */}
      <Link className="flex items-center space-x-2" to={`/${username}`}>
        <img
          src="https://avatars.githubusercontent.com/u/2254731?v=4"
          alt="User profile"
          className="w-8 h-8 rounded-full"
        />
        <span className="font-semibold">vinimarcili</span>
      </Link>
    </header>
  )
}

export default Header
