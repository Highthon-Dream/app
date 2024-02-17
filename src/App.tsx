import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Main />} />
    </Routes>
  );
};
export default App;
