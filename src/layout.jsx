import React from 'react'
import { useState } from "react"
import "./_app.scss"
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar"
import { Container } from "react-bootstrap"

const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false);
    const handleToggleSidebar = () => toggleSidebar(value => !value);

    return (
      <>
        <Header handleToggleSidebar={handleToggleSidebar} />
        <div className="app-container">
          <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
          <Container fluid className="main-container">
            {children}
          </Container>
          
        </div>
      </>
    )
  }
  export default Layout;
