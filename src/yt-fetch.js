import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;
const URL = `https://youtube.googleapis.com/youtube/v3/`;

async function getData() {
  try {
    const res = await axios.get(
      `${URL}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${KEY}`
    );
    return res.data.items;
  } catch (e) {
    console.log(e);
  }
}

async function getUserData(input) {
  try {
    const res = await axios.get(
      `${URL}search?part=snippet&maxResults=20&q=${input}&key=${KEY}`
    );
    return res.data.items; // this will return an array of objects containing the results for the search input
  } catch (e) {
    console.log(e);
  }
}

export { getData, getUserData };
