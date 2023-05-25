import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  NavBar,
  SideBar,
  Home,
  VideoDetails,
  VideoList,
  VideoSearch,
  Error,
} from "./Components";

import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main-container">
          <SideBar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<VideoSearch />} />
              <Route path="/list" element={<VideoList />} />
              <Route path="/details/:id" element={<VideoDetails />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
