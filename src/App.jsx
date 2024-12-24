import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Gallery from "./Page/Gallery";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
