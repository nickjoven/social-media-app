import { useState, useEffect } from 'react'
import './App.css';
import store from './store';
import { connect } from 'react-redux'
import Navbar from './Navbar';

const App = () => {
  const [posts, setPosts] = useState([])
  // const [showNewPostForm, setShowNewPostForm] = useState(false)


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

  const increaseValue = () => {
    store.dispatch({type: 'counter/incremented'})
  }

  const decreaseValue = () => {
    store.dispatch({type: 'counter/decremented'})
  }

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
      <h1>Global count is: {store.getState().value}</h1>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <hr />
      <div>
        <button>New Post</button>
        {/* {showNewPostForm 
        ?
          <div>
            <form>
              <input name='title' type='text' placeholder='Title' />
              <input name='content' type='textarea' placeholder='Content' />
            </form>
          </div>
        : null
        } */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {value: state.value}
}

export default connect(mapStateToProps)(App)

