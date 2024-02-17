import Login from "./pages/Login";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
export default App;
