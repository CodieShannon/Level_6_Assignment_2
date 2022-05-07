// Import React Router Dom
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Import Navigation Menu
import Nav from "./Nav";

// Import Subject Files
import SCP_006 from "./SCP-006";
import SCP_015 from "./SCP-015";
import SCP_021 from "./SCP-021";
import SCP_162 from "./SCP-162";
import SCP_188 from "./SCP-188";
import SCP_250 from "./SCP-250";
import SCP_309 from "./SCP-309";
import SCP_479 from "./SCP-479";
import SCP_529 from "./SCP-529";
import SCP_667 from "./SCP-667";
import SCP_679 from "./SCP-679";
import SCP_686 from "./SCP-686";
import SCP_740 from "./SCP-740";
import SCP_753 from "./SCP-753";
import SCP_779 from "./SCP-779";
import SCP_844 from "./SCP-844";
import SCP_863 from "./SCP-863";
import SCP_871 from "./SCP-871";
import SCP_902 from "./SCP-902";
import SCP_966 from "./SCP-966";

function App() {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<SCP_006 />} />
          <Route path="/SCP-015" element={<SCP_015 />} />
          <Route path="/SCP-021" element={<SCP_021 />} />
          <Route path="/SCP-162" element={<SCP_162 />} />
          <Route path="/SCP-188" element={<SCP_188 />} />
          <Route path="/SCP-250" element={<SCP_250 />} />
          <Route path="/SCP-309" element={<SCP_309 />} />
          <Route path="/SCP-479" element={<SCP_479 />} />
          <Route path="/SCP-529" element={<SCP_529 />} />
          <Route path="/SCP-667" element={<SCP_667 />} />
          <Route path="/SCP-679" element={<SCP_679 />} />
          <Route path="/SCP-686" element={<SCP_686 />} />
          <Route path="/SCP-740" element={<SCP_740 />} />
          <Route path="/SCP-753" element={<SCP_753 />} />
          <Route path="/SCP-779" element={<SCP_779 />} />
          <Route path="/SCP-844" element={<SCP_844 />} />
          <Route path="/SCP-863" element={<SCP_863 />} />
          <Route path="/SCP-871" element={<SCP_871 />} />
          <Route path="/SCP-902" element={<SCP_902 />} />
          <Route path="/SCP-966" element={<SCP_966 />} />
        </Routes>
    </Router>
  );
}

export default App;
