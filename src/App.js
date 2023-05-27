import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  NavBar,
  SideBar,
  Home,
  VideoDetails,
  SearchResults,
  Error,
} from './Components';
import './index.css';

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
              <Route path="/search/:input" element={<SearchResults />} />
              <Route path="/video/:id" element={<VideoDetails />} />
              {/* <Route
                path="/category/:categoryId"
                element={<CategoryFilter />}
              /> */}
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
