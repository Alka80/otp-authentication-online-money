import './App.css'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import { Home } from './components/Home'
import { MyBanks } from './components/MyBanks'
import { OTPVerification } from './components/OTPVerification';
import { TransactionHistory } from './components/TransactionHistory'
import { TransferFunds } from './components/TransferFunds'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mybanks" element={<MyBanks />} />
        <Route path="/verify-otp" element={<OTPVerification />} />
        <Route path="/transactions" element={<TransactionHistory />} />
        <Route path="/transfer" element={< TransferFunds />} />
      </Routes>
    </Router>
  )
}

export default App
