import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  NavBar,
  Home,
  VideoDetails,
  AboutMe,
  SearchResults,
  CategorySearch,
} from "./Components";
import "./index.css";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:input" element={<SearchResults />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/categories" element={<CategorySearch />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
