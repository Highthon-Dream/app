import Header from "./components/Header";
import Leftbar from "./components/Leftbar";
import Buket from "./pages/Buket";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import MyEditor from "./pages/Editor";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex items-start">
        <Leftbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/buket" element={<Buket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/editor" element={<MyEditor />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
