import { useEffect, useState } from "react"
import { Post } from "../../types/post.type"
import Loading from "../../components/Loading/Loading.component"
import PostFeed from "../../components/PostFeed/PostFeed.component"
import { getFeed } from "../../services/instagram.service"

const HomePage = () => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getFeed().then((data) => {
      setPosts(data)
      setTimeout(() => setLoading(false), 1000)
    })
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <PostFeed key={post.id} post={post} />
      ))}
    </div>
  )
}

export default HomePage
