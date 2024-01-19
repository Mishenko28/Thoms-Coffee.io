import { useState } from "react"

export default function Header(prop) {

    const [userContainerToggle, setUserContainerToggle] = useState(false)
    
    const userContainerToggleHandler = () => setUserContainerToggle(!userContainerToggle)
    
    return (
        <header>
            <input onChange={prop.onClick[0]} type="checkbox" id="checkbox" checked={prop.checkBox}/>
            <label htmlFor="checkbox" className="toggle">
                <div className="bar bar--top"></div>
                <div className="bar bar--middle"></div>
                <div className="bar bar--bottom"></div>
            </label>
            <h1>Thoms Coffee</h1>
            <div onClick={userContainerToggleHandler} className="profile-pic">
                <i className="fa-solid fa-user"></i>
            </div>
            {userContainerToggle &&
                <div className="user-info">
                    <h1>Username: {prop.user.username != "" ? prop.user.username : "no account"}</h1>
                    {prop.user.username != "" && <button onClick={prop.onClick[1]}>Sign out</button>}
                </div>
            }

        </header>
    )
}