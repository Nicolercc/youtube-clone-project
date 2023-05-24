import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import {
  NavBar,
  SideBar,
  Home,
  VideoDetails,
  VideoList,
  VideoSearch,
  Error,
} from './Components';

const KEY = process.env.REACT_APP_API_KEY;
const URL = `https://youtube.googleapis.com/youtube/v3/`;

function App() {
  async function getData() {
    try {
      const res = await axios.get(
        `${URL}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${KEY}`
      );
      console.log(res.data.items);
    } catch (e) {
      console.log(e);
    }
  }
  getData();

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
