import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import SignupPage from "./components/SignupPage";
import CheckIdentity from "./components/CheckIdentity";
import MainHomePage from "./components/CalculateWeight";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-identity" element={<CheckIdentity />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/main-home" element={<MainHomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
