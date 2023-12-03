import React, { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Sidebar from './Sidebar.jsx'

function App() {
  const [sideToggleVisible, setSideToggleVisible] = useState(false)

  const sideToggler = () => setSideToggleVisible(!sideToggleVisible)
  const closeSidebar = () => setSideToggleVisible(false)


  return (
    <>
      {sideToggleVisible && <Sidebar/>}
      <Content onClick={closeSidebar}/>
      <Header onClick={sideToggler} checkBox={sideToggleVisible}/>
    </>
  )
}

export default App
