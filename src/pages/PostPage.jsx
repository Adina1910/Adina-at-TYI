import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import supabase from "../supabase"

export default function PostPage(){

  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetchPost()
  }, [])

  async function fetchPost(){
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single()

    if(!error){
      setPost(data)
    }
  }

  if(!post){
    return <p style={{padding:"40px"}}>Loading post...</p>
  }

  return(
    <div style={{padding:"60px"}}>
      <h1>{post.title}</h1>
      <p style={{marginTop:"20px", lineHeight:"1.6"}}>
        {post.content}
      </p>
    </div>
  )
}