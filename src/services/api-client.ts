import axios from "axios";
import useGenres from "../hooks/useGenre";

export default  axios.create({
  url: "https://moviesdatabase.p.rapidapi.com/",
  params: {
    genre: "Animation",
    startYear: "2020",
    limit: "20",
    list: "most_pop_movies",
  },
  headers: {
    "X-RapidAPI-Key": "6bdb233e88mshebfc7055e380d6ap184cadjsn49566660f0f3",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
});
