import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "d5fcb290fa5dbfc63ac480d8e021fabb",
    language: "en-US",
  },
});

export default api;
