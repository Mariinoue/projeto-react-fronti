import type { Comment } from "./commet.interface"

export interface Article {
  id: number
  title: string
  content: string
  date: Date
  img: string
  categories: string[]
  comments: Comment[]
}