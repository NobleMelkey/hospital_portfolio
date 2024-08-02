import React from 'react';
import "./newcss.css";

const Doctor = ({ name, specialty, experience, image }) => (
    <div className="doctor">
      <img src={image} alt={name} className="doctor__img" />
      <div className="doctor__info">
        <h2 className="doctor__name">{name}</h2>
        <p className="doctor__specialty">{specialty}</p>
        <p className="doctor__experience">{experience}</p> {/* Display experience */}
      </div>
    </div>
  );
  
  export default Doctor;