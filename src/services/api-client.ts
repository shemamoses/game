import axios from "axios";

export default axios.create({
  url: "https://moviesdatabase.p.rapidapi.com/titles",
  headers: {
    "X-RapidAPI-Key": "6bdb233e88mshebfc7055e380d6ap184cadjsn49566660f0f3",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
});
