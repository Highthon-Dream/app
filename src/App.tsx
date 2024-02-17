import Header from "./components/Header";
import Leftbar from "./components/Leftbar";
import Buket from "./pages/Buket";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

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
        </Routes>
      </div>
    </div>
  );
};
export default App;
