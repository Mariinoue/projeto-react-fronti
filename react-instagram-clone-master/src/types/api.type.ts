import { Post } from "./post.type"

export interface InstagramResponse {
  meta: {
    code: number
  },
  data: Array<Post>
}