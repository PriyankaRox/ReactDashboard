import React from 'react';
import Feedback from './Feedback';
import "./Feedback.css";


const FeedbackList = () => {
  const feedbacks = [
    {
      name: 'John Doe',
      profilePic: 'https://img.freepik.com/free-photo/portrait-upset-american-black-person_23-2148749581.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716940800&semt=ais_user',
      rating: 5,
      message: 'Great service! Highly recommend.',
    },
    {
      name: 'Jane Smith',
      profilePic: 'https://img.freepik.com/free-photo/front-view-portrait-businessman-with-glasses_23-2148816831.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717200000&semt=ais_user',
      rating: 4,
      message: 'Good experience overall, will come back again.',
    },
    {
      name: 'Michael Brown',
      profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaoc9n2IKIvT1KZRHi4LvsL2vZlKIWJVLBpSZMKjFG_kGF146RQV6g2cBejTllkBqBoTI&usqp=CAU',
      rating: 3,
      message: 'It was okay, could be better.',
    },
    {
      name: 'Emily White',
      profilePic: 'https://img.freepik.com/free-photo/expressive-lady-posing-studio_344912-2590.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713225600&semt=ais',
      rating: 5,
      message: 'Absolutely loved it! Exceptional quality.',
    },
  ];

  return (
    <div className="feedback-container">
      {feedbacks.map((feedback, index) => (
        <Feedback key={index} feedback={feedback} />
      ))}
    </div>
  );
};

export default FeedbackList;
