import { useRef } from 'react'
import store from '../store'

const Login = () => {

    const form = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(form.current)
        let req = await fetch('http://localhost:3100/login', {
            method: 'POST',
            body: data
        })
        if (req.ok) {
            let res = await req.json()
            console.log('User', res)
            store.dispatch({ type: 'user/login', user: res })
        } else {
            alert('Invalid login info')
        }
    }

    return (
        <div>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit} ref={form}>
            <input type='email' placeholder='email' name='email' /><br />
            <input type='password' placeholder='password' name='password' /><br />
            <input type='submit' />
            <br />
            </form>
        </div>
    )

}

export default Login