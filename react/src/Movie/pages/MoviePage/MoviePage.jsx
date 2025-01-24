import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to extract movieId from the URL

const MoviePage = ({ Api_key }) => {
  const { movieId } = useParams(); // Extract movieId from the URL
  const [backdropImage, setBackdropImage] = useState('');
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const fetchBackdropImage = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Api_key}`
        );
        console.log(response);
        
        // Set the backdrop image URL
        setBackdropImage(`${IMAGE_BASE_URL}${response.data.backdrop_path}`);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBackdropImage();
  }, [movieId, Api_key]);

  return (
    <div>
      {backdropImage ? (
        <img
          src={backdropImage}
          alt="Movie Backdrop"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default MoviePage;