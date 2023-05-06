import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="title">
        <h2>Contact Me</h2>
      </div>
      <p>You can reach me at my IG Handle @Heebukunoluwa01</p>
      <p>My email address is ibukunoluwadawodu@gmail.com</p>
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default Contact;
