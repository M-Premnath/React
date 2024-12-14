// import React from 'react';
import './card.scss';

const Card = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="cardheader">
          <i className="fa-solid fa-arrow-left"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

        <div className="image">
          <img
            src="https://img.freepik.com/free-vector/tiktok-profile-picture-template_742173-4482.jpg"
            alt="Profile"
          />
        </div>

        <div className="p">
          <h3>Name</h3>
          <p>Designer & Developer</p>
        </div>

        <div className="social-icons">
          <i className="fa-brands fa-facebook-f" style={{ color: 'blue' }}></i>
          <i className="fa-brands fa-twitter" style={{ color: 'skyblue' }}></i>
          <i className="fa-brands fa-instagram" style={{ color: 'red' }}></i>
          <i className="fa-brands fa-youtube" style={{ color: 'red' }}></i>
        </div>

        <div className="display">
          <button>Message</button>
          <button>Subscribe</button>
        </div>

        <div className="icons2">
          <i className="fa-regular fa-heart">
            <span>12.3k</span>
          </i>
          <i className="fa-regular fa-comment">
            <span>40.3k</span>
          </i>
          <i className="fa-solid fa-share">
            <span>12.8k</span>
          </i>
        </div>
      </div>
    </div>
  );
};

export default Card;
