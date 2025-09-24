// Footer.tsx
const Footer = () => {
  const gitHubUsername = "vinimarcili"
  const currentYear = new Date().getFullYear() // Obtém o ano atual

  return (
    <footer className="bg-gray-100 p-4 text-center text-sm w-full mt-auto">
      <p className="text-gray-600 text-sm">
        Desenvolvido por{" "}
        <a
          href={`https://github.com/${gitHubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          {gitHubUsername}
        </a>{" "}
        &copy; {currentYear}
      </p>
    </footer>
  )
}

export default Footer
