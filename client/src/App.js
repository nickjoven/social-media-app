import { useState, useEffect } from 'react'
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        let req = await fetch('http://localhost:3100/posts')
        if (req.ok) {
          let res = await req.json()
          setPosts(res)
        } else {
          alert('Posts could not be loaded.')
        }
      } catch(error) {
        alert(error.message)
      }
    }
    getPosts()
  }, [])

  return (
    <div className="App">
      <h2>News Feed</h2>
      {posts.map(post => {
        const { id, title, content, likes_count, user_id } = post
        return (
          <div key={id}>
            <h4>{title}</h4>
            <p>{content}</p>
          </div>
        )
      })}
      <div>
        <button>New Post</button>
      </div>
    </div>
  );
}

export default App;
