import React, {useState, useEffect} from 'react'
import { Card } from 'antd'

const ShowPostList = props => {
  const [Post, setPost] = useState([])
  useEffect(() => {
    (async () => {
      const response = await fetch('https://localhost:44352/api/Articles')
      const newData = await response.json()
      setPost(newData)
    })()
  }, [])

  return (
    <div>
      {Post.map(Post => {
        const {id, title, content} = Post
        return (
          <Card>
          <div key={id}>
            <p style={{fontWeight: 'bold'}}>{title}</p>
            <p> {content}</p>
            </div>
            </Card>
        )
      })}
    </div>
  )
}

export default ShowPostList