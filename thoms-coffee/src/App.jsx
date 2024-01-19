import React, { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Sidebar from './Sidebar.jsx'
import Frontpage from './Frontpage.jsx'

function App() {
  
  const [user, setUser] = useState({username: "", password: ""})

  const [sideToggleVisible, setSideToggleVisible] = useState(false)
  const [contentToggle, setContentToggle] = useState(false)

  const sideToggler = () => setSideToggleVisible(!sideToggleVisible)
  const closeSidebar = () => setSideToggleVisible(false)
  const closeContent = () => {
    setContentToggle(false)
    setUser({username: "", password: ""})
  }

  return (
    <>
      {!contentToggle && <Frontpage setUser={setUser} user={user} onClick={setContentToggle}/>}
      {contentToggle && <Content onClick={closeSidebar}/>}
      {sideToggleVisible && <Sidebar/>}
      <Header user={user} onClick={[sideToggler, closeContent]} checkBox={sideToggleVisible}/>
    </>
  )
}

export default App
