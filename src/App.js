import Main from "./Pages/Main.jsx"
import Home from "./Pages/Home/Home.jsx"
import { Routes, Route,  } from "react-router-dom"

const App = () => {

  return (
    <Routes>
      <Route path="/reservation" element={<Main />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
