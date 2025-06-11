import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import HomePage  from './pages/HomePage/HomePage'
import LoginPage  from './pages/LoginPage/LoginPage'
import NotFoundPage  from './pages/NotFoundPage/NotFoundPage'
import RegisterPage  from './pages/RegisterPage/RegisterPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={ <HomePage/>}></Route>
            <Route path='/login' element={ <LoginPage/>}></Route>
            <Route path='/register' element={ <RegisterPage/>}></Route>
            <Route path='*' element={ <NotFoundPage/>}></Route> {/* Page 404 */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
