import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginScreen from "./Screens/LoginScreen";
import UserListScreen from "./Screens/UserListScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import Navbar from "./Components/Navbar";
import Protected from "./ProtectedRoutes";

function App() {
  const userInfo = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : null;

  const isAuthenticated = userInfo ? true : false;

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={isAuthenticated ? <UserListScreen /> : <LoginScreen />} />
          <Route
            path="/users"
            element={
              <Protected isLoggedIn={isAuthenticated}>
                <UserListScreen />
              </Protected>
            }
          />
          <Route path="/signup" element={isAuthenticated ? <UserListScreen /> : <SignUpScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
