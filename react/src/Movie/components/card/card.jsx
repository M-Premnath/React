import React from 'react';
import './Card.css'; // Assuming you're using an external CSS file for styling
import { Link } from 'react-router-dom';

const Card = ({ id, title, posterPath, releaseDate, voteAverage, description}) => {
  return (
    <div className="card">
     <Link to={ `/movie/${id}`}><img className="card-img" src={posterPath} alt={title} /></Link>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="release-date">{description}...</p>
        <p className="release-date">Release Date: {releaseDate}</p>
        <p className="vote-average">Vote Average: {voteAverage}</p>
        
      </div>
    </div>
  );
};

export default Card;
