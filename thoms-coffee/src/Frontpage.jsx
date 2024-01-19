import { useState } from "react"

export default function Frontpage(prop) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const setUserHandler = () => {
        prop.setUser({username: username, password: password})
        prop.onClick(true)
    }

    return (
        <div className="signin-container">
            <h2>Sign in</h2>
            <div className="form">
                <label htmlFor="username">Username:</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username"/>
                <label htmlFor="password">Password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password"/>
                <button onClick={setUserHandler}>Sign in</button>
            </div>
        </div>
    )
}