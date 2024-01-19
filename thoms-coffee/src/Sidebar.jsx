import { useState } from "react"

export default function Sidebar() {

    const [contactVisible, setContactVisible] = useState(false)
    const [addresstVisible, setAddresstVisible] = useState(false)

    const contactHandler = () => setContactVisible(!contactVisible)
    const addressHandler = () => setAddresstVisible(!addresstVisible)

    return (
        <div className="sidebar">
            <h1>About</h1>
            <h1 onClick={contactHandler}>Contact</h1>
            {contactVisible &&
                <div className="contact-container">
                    <a href="https://www.facebook.com/johnthomas.alog"><h2>Facebook<i className="fa-brands fa-facebook"></i></h2></a>
                    <a href="https://instagram.com/jtmishenko"><h2>Instagram<i className="fa-brands fa-instagram"></i></h2></a>
                    <a href="https://github.com/Mishenko28"><h2>Github<i className="fa-brands fa-github"></i></h2></a>
                    <a href="#"><h2>Discord<i className="fa-brands fa-discord"></i></h2></a>
                </div>
            }
            <h1 onClick={addressHandler}>Address</h1>
            {addresstVisible && <h3>Barretto, Olongapo City</h3>}
        </div>
    )
}