import React,{useState,useEffect} from "react";
import axios from "axios";
import Navbar from "../src/Movie/components/Navbar/index";
import Footer from "../src/Movie/components/Footer/footer";
import Home from "../src/Movie/pages/Home/index";
import "./App.css";
import MoviePage from "./Movie/pages/MoviePage/MoviePage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const Api_key = "7a8bb6478bbb1b39f1489178f0d07bc7";
  const Base_Url = "https://api.themoviedb.org/3/";
  const image_url = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  async function fetchAllMovies(page = 1) {
    const params = {
      api_key: Api_key,
      page: page,
    };
    const response = await axios.get(`${Base_Url}discover/movie`, { params });
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
    // console.log(response);
    
  }
  async function fetchSearchMovies(query, page = 1) {
    const params = {
      api_key: Api_key,
      page: page,
      query: query,
    };
    try {
      const response = await axios.get(`${Base_Url}search/movie`, { params });
      console.log(response.data);
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }
  

  useEffect(() => {
    if (search === "") {
      fetchAllMovies(currentPage);
    } else {
      fetchSearchMovies(search, currentPage);
    }
  }, [search, currentPage]);
  

  function handlePrev() {
    setCurrentPage(currentPage - 1);
  }

  function handleNext() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="app-container">
      <Navbar setSearch={setSearch} search={search} />
      <BrowserRouter>
      <Routes className="main-content">
      <Route path="/" element={<Home handleNext={handleNext} handlePrev={handlePrev} movies={movies} image_url={image_url} totalPages={totalPages} currentPage={currentPage} />} />
      <Route path="/movie/:id" element={<MoviePage  Api_key={Api_key} />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;