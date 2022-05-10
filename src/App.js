// Import React Router Dom
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Import Navigation Menu
import Nav from "./Nav";

// Import Subject File Loader
import Loader from "./Loader";

// Functions
function App() {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Loader id={0} />} />
          <Route path="/SCP-015" element={<Loader id={1} />} />
          <Route path="/SCP-021" element={<Loader id={2} />} />
          <Route path="/SCP-162" element={<Loader id={3} />} />
          <Route path="/SCP-188" element={<Loader id={4} />} />
          <Route path="/SCP-250" element={<Loader id={5} />} />
          <Route path="/SCP-309" element={<Loader id={6} />} />
          <Route path="/SCP-479" element={<Loader id={7} />} />
          <Route path="/SCP-529" element={<Loader id={8} />} />
          <Route path="/SCP-667" element={<Loader id={9} />} />
          <Route path="/SCP-679" element={<Loader id={10} />} />
          <Route path="/SCP-686" element={<Loader id={11} />} />
          <Route path="/SCP-740" element={<Loader id={12} />} />
          <Route path="/SCP-753" element={<Loader id={13} />} />
          <Route path="/SCP-779" element={<Loader id={14} />} />
          <Route path="/SCP-844" element={<Loader id={15} />} />
          <Route path="/SCP-863" element={<Loader id={16} />} />
          <Route path="/SCP-871" element={<Loader id={17} />} />
          <Route path="/SCP-902" element={<Loader id={18} />} />
          <Route path="/SCP-966" element={<Loader id={19} />} />
        </Routes>
    </Router>
  );
}

// Export App
export default App;
