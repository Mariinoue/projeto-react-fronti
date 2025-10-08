const Button = () => {
  try {
    console.log(qualquervariavel)
  } catch (error) {
    console.error(error)
    throw error
  }

  return <button>Click me</button>
}

export default Button