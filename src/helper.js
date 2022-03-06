//const axios = require ('axios');
//const e = require("express");
//
//const axiosConfig = {
//    headers: {
//        Accept: 'application/json',
//        'Content-Type': 'application/json'
//    },
//    timeout: 15000
//};
//
//const basePath = 'https://api.themoviedb.org/3/';
//const apikey = '9e11b7f438dd5a9b2f1c9d3a92c442cb';
//
//async function getPopularMovies() {
//    
//    try {
//        console.log('+++++++++++++++++++')
//        let path = 'movie/popular';
//        let url = basePath+path+'?api_key='+apikey;
//        //const res = await axios.get(basePath, axiosConfig);
//        url2 = 'https://api.themoviedb.org/3/movie/popular?api_key=9e11b7f438dd5a9b2f1c9d3a92c442cb'
//
//        //const res = axios.get(url).then(resp => {
//        //    
//        //});
//        return await axios.get(url)
//
//        //const res = async () => {
//        //    try {
//        //      return await axios.get(url)
//        //    } catch (error) {
//        //      console.error(error)
//        //    }
//        //  }
//
//    } catch (err) {
//        // This is just a hypothetical utility function to display a toast
//        // notification to the user in the event of an error.
//        console.log('EROORRRRRRR!!!!!!!!!!!!');
//        console.log(err);   
//    }
//}


//async function getMovieDetail() {
//    try {
//        let path = 'movies/popular';
//        let url = basePath+path+'?api_key='+apikey;
//        const res = await axios.get(basePath, axiosConfig);
//        console.log("aquii");
//        console.log(res.data);
//        return res.data;
//    } catch (err) {
//        // This is just a hypothetical utility function to display a toast
//        // notification to the user in the event of an error.
//        console.log('EROORRRRRRR!!!!!!!!!!!!');
//        console.log(err);   
//    }
//}
//
//  
//function myFunction2(req, resp) {
//return new Date ();
//}

const dotenv = require('dotenv');
const axios = require('axios');
const apikey = '9e11b7f438dd5a9b2f1c9d3a92c442cb';


dotenv.config();

/**
 * Fetch popular movies from TMDB
 *  @returns {Array} movies
 */
 const fetchMovies = async (page) => {
    try {
      let result;
      let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${page}`;
      await axios
        .get(
          url
        )
        .then((response) => {
          result = response.data.results;
        })
        .catch((error) => {
          //console.log(error);
        });
      return result;
    } catch (error) {
      //console.error(error);
    }
  };

  
const fetchMovieDetail = async (id) => {
    try {
      let result;
      let url =  `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
      console.log("url !!!!!!!!!!");
      console.log(url);
      console.log("url !!!!!!!!!!");
      await axios
        .get(
            url
        )
        .then((response) => {
          result = response.data;
        })
        .catch((error) => {
          //console.log(error);
        });
      return result;
    } catch (error) {
      //console.error(error);
    }
};


module.exports = {
    fetchMovies : fetchMovies,
    fetchMovieDetail: fetchMovieDetail
};