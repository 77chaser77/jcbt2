import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Header/Nav'
import SignUp from './pages/Signup'
import About from './pages/About'
import SignIn from './pages/SignIn'
import MyPage from './pages/MyPage'
import Header from './components/Header/Header'
import Main from './pages/Main'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
