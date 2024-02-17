import Header from "./components/Header";
import Leftbar from "./components/Leftbar";
import Buket from "./pages/Buket";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
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
