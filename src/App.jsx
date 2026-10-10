import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./pages/Home";

function App() {
  return (
    
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} /> // to fix path issue, add index to the home route
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    
  );
}
        
export default App;
