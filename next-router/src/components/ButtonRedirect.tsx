'use client'
import { useRouter } from "next/navigation"

const ButtonRedirect = () => {
  const router = useRouter()

  return <button onClick={() => router.push("/dashboard")}>
        To Dashboard
      </button>
}

export default ButtonRedirect