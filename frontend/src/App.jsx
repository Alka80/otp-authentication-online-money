import './App.css'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import { Home } from './components/Home'
import { MyBanks } from './components/MyBanks'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mybanks" element={<MyBanks />} />
        {/* Dummy routes for now */}
        <Route path="/transactions" element={<h1>Transactions Page</h1>} />
        <Route path="/transfer" element={<h1>Transfer Funds Page</h1>} />
      </Routes>
    </Router>
  )
}

export default App
