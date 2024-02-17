import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Buket from "./pages/Buket";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import ToastEditor from "./pages/BucketListWrite";
import TodoWrite from "./pages/TodoWrite";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bucket" element={<Buket />} />
        <Route path="/bucket/write/:id" element={<Detail />} />
        <Route path="/write" element={<ToastEditor />} />
        <Route path="/bucket/write" element={<TodoWrite />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};
export default App;
