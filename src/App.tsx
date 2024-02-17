import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Buket from "./pages/Buket";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/buket" element={<Buket />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};
export default App;
