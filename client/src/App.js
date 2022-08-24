import { useState, useEffect, useRef } from 'react'
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([])
  const form = useRef()

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

  const handleAddPost = () => {

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(form.current)
    let req = await fetch('http://localhost:3100/login', {
      method: 'POST',
      body: data
    })
    if (req.ok) {
      alert('You have logged in')
    } else {
      alert('Invalid login info')
    }
  }

  return (
    <div className="App">
      <h2>Log in</h2>
      <form onSubmit={handleSubmit} ref={form}>
        <input type='email' placeholder='email' name='email' /><br />
        <input type='password' placeholder='password' name='password' /><br />
        <input type='submit' />
        <br />
      </form>
      <hr />
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
