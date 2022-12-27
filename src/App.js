import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={!user ? <Login /> : <Home />} />
            {/* <Route path="/" element={!user ? <Navigate replace={true} to="/login" /> : <Home />} /> */}
            <Route path="/login" element={user ? <Home /> : <Login />} />
            {/* <Route path="/login" element={user ? <Navigate replace={true} to="/" /> : <Login />} /> */}
            <Route path="/signup" element={user ? <Home /> : <Signup />} />
            {/* <Route path="/signup" element={user ? <Navigate replace={true} to="/" /> : <Signup />} /> */}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
