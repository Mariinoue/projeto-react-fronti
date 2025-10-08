import type { Comment } from "../interfaces/commet.interface"

interface CommentProps {
  comment: Comment
}

export const CommentComponent = ({ comment }: CommentProps) => {
  return (
    <div key={comment.id} className="border p-4 rounded mb-2">
      <p className="font-semibold">{comment.name}</p>
      <p className="text-gray-600">{comment.text}</p>
    </div>
  )
}