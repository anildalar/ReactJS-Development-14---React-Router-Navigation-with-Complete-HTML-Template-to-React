import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <header>
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Link to="/" className="nav-link active">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/login" className="nav-link">Login</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/register" className="nav-link">Register</Link>
            </Nav.Item>
            </Nav>

        </header>
        <Outlet />
        <footer>Footer</footer>
    </>
  )
}
