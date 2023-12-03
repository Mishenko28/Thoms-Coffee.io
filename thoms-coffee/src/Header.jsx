export default function Header(prop) {

    return (
        <header>
            <input onChange={prop.onClick} type="checkbox" id="checkbox" checked={prop.checkBox}/>
            <label htmlFor="checkbox" className="toggle">
                <div className="bar bar--top"></div>
                <div className="bar bar--middle"></div>
                <div className="bar bar--bottom"></div>
            </label>
            <img src="src/assets/THOMS COFFEE.png"/>
            <div className="profile-pic">
                <i className="fa-solid fa-user"></i>
            </div>
        </header>
    )
}