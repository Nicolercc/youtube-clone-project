import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;
const URL = `https://youtube.googleapis.com/youtube/v3/`;

async function fetchMostPopular() {
  try {
    const res = await axios.get(
      `${URL}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${KEY}`
    );
    return res.data.items;
  } catch (e) {
    console.log(e);
  }
}

async function fetchUserSearch(input) {
  try {
    const res = await axios.get(
      `${URL}search?part=snippet&maxResults=20&q=${input}&key=${KEY}`
    );
    return res.data.items;
  } catch (e) {
    console.log(e);
  }
}

async function fetchVideoByID(id) {
  try {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${KEY}`
    );
    console.log(res.data.items[0]);
    return res.data.items[0];
  } catch (e) {
    console.log(e);
  }
}

export { fetchMostPopular, fetchUserSearch, fetchVideoByID };
