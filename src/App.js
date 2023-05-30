import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  NavBar,
  Home,
  VideoDetails,
  AboutMe,
  SearchResults,
  Error,
} from './Components';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:input" element={<SearchResults />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
