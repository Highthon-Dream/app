import Header from "./components/Header";
import Leftbar from "./components/Leftbar";
import Buket from "./pages/Buket";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import ToastEditor from "./pages/Editor";

const App = () => {
  return (
    <div>
      <Header />
        <Leftbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/buket" element={<Buket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/editor" element={<ToastEditor />} />
        </Routes>
    </div>
  );
};
export default App;
