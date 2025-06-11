import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import BootstrapNavigationItem from './components/nav-item/nav-item'

import HomePage  from './pages/home-page/home-page';
import LoginPage  from './pages/login-page/login-page';
import NotFoundPage  from './pages/notfound-page/notfound-page';
import RegisterPage  from './pages/register-page/register-page';

function App() {
  return (
    <>
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Nav activeKey="/">
            <BootstrapNavigationItem path='/' title='Главная'/>
            <BootstrapNavigationItem path='/login' title='Вход'/>
            <BootstrapNavigationItem path='/register' title='Регистрация'/>
          </Nav>
        </Navbar>

        <Routes>
          <Route path='/' element={ <HomePage/>}></Route>
          <Route path='/login' element={ <LoginPage/>}></Route>
          <Route path='/register' element={ <RegisterPage/>}></Route>
          <Route path='*' element={ <NotFoundPage/>}></Route> {/* Page 404 */}
        </Routes>
      </Router>
    </>
  )
}

export default App
