// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './login'
import Register from './Register'
import Reset from './Reset'
import Dashboard from './Dashboard'
import Form from './Form'
function Home(props) {
  return (
    <div
      className="app"
      ref={props.home}
      style={{ transform: 'translateY(55%)' }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  )
}
export default Home
