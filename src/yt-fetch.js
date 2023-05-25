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

export { getData };
