import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import ScrollToHash from "./components/ScrollToHash"

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
