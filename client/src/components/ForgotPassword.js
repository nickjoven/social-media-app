import { useState } from 'react'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const handleForgotPassword = async (e) => {
        e.preventDefault()
        let req = await fetch('http://localhost:3100/forgot_password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
        })
        if (req.ok) {
            let res = await req.json()
            let securityQustion = prompt("Is it really you, though? Say yes if so. Don't lie.")
            if (securityQustion === 'yes') {
                alert(`Your password is ${res.password}`)
            } else {
                alert("Don't waste my time.")
            }
        } else alert('No such user')
    }
    return (
        <div className="forgot-password">
            <h2>Forgot your password?</h2>
            <p>Fill out the form below and complete the security questions to recover your account.</p>
            <form onSubmit={handleForgotPassword}>
            <input type='email' placeholder='Enter your email' name='recoverEmail' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='submit' />
            </form>
            <img src="https://c.tenor.com/cSH5vFDdHbgAAAAC/harrison-ford-nope.gif" />
        </div>
    )
}

export default ForgotPassword