import React from 'react';
import './Feedback.css';

const Feedback = ({ feedback }) => {
  return (
   
    <div className="feedback-card">
      <img src={feedback.profilePic} alt={`${feedback.name}'s profile`} className="profile-pic" />
      <div className="feedback-info">
        <h3>{feedback.name}</h3>
        <p className="rating">Rating: {feedback.rating}/5</p>
        <p className="message">"{feedback.message}"</p>
      </div>
    </div>
    
  );
};

export default Feedback;
