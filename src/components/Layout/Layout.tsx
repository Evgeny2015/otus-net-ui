import { type FC } from "react"
import { Outlet } from "react-router-dom"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import BootstrapNavigationItem from '../NavItem/navItem'
import { useSelector } from "react-redux"
import { accountSelectors } from "../../store/account"

const Layout: FC = () => {
    const user = useSelector(accountSelectors.get)

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <div className="navbar-brand">{user}</div>
                <Nav activeKey="/">
                    <BootstrapNavigationItem path='/' title='Главная' />
                    <BootstrapNavigationItem path='/login' title='Вход' />
                    <BootstrapNavigationItem path='/register' title='Регистрация' />
                </Nav>
            </Navbar>
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default Layout