import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import supabase from "../supabase"
import "./Journey.css"

export default function Journey(){

  const [posts, setPosts] = useState(null)
  const navigate = useNavigate()   // ✅ HERE

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts(){
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false })

    console.log("DATA:", data)
    console.log("ERROR:", error)

    if(error){
      console.log(error)
    } else {
      setPosts(data)
    }
  }

  return(

    <section className="journey">
      <div className="container">

        <h2 className="section-title">
          My Learning Journey
        </h2>

        <div className="cards">

          {posts === null ? (
            <p>Loading posts...</p>
          ) : posts.length === 0 ? (
            <p>No posts yet</p>
          ) : (
            posts.map((post)=>(
              <div className="card" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.slice(0,100)}...</p>
                <span onClick={() => navigate(`/post/${post.id}`)}>Read More →</span>
              </div>
            ))
          )}

        </div>

      </div>
    </section>

  )
}