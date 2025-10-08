'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const ClientRedirect = ({ to }: { to: string }) => {
  const router = useRouter()

  useEffect(() => {
    router.push(to)
  }, [to, router])

  return null
}

export default ClientRedirect