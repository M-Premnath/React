import React from 'react';
import "./index.css";
import Card from "../../components/card/card";


const Home = ({image_url,handleNext,handlePrev,movies,currentPage,totalPages}) => {
 
  return (
    <div className="home">
      <div className="card-container" style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap',marginBottom:'10px'}}>
        {movies.map((movie, index) => (
          <Card
            key={index}
            id={movie.id}
            title={movie.title}
            description={movie.overview.substring(0, 70)}
            posterPath={image_url + movie.poster_path}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
      <div className="pagination">
        <button className="explore-button" onClick={handlePrev}>
          Prev
        </button>
        {currentPage}/{totalPages}
        <button className="explore-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;