import type { NextPage } from "next"
import { useEffect, useState } from "react"

const Home: NextPage = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getItems = async () => {
      const { posts } = await fetch("/posts").then((res) => res.json())
      setPosts(posts)
    }
    getItems()
  }, [])

  console.log(posts)

  return <div>Home</div>
}

export default Home
