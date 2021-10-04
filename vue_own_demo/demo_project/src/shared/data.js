import * as axios from 'axios';

const getMovies = async () => {

    //https://imdb-api.com/en/API/MostPopularMovies/k_lgi3x81k
    const response = await axios.get(`https://imdb-api.com/en/API/MostPopularMovies/k_rw0hlp0r`);
    let data = response;
    console.log("api data: ", data.data.items);
    return data.data.items;
};

export const data = {
    getMovies,
  };
