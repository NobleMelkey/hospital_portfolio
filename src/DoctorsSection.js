import React from 'react';
import Doctor from './doctor'; // Import the Doctor component
import "./newcss.css";
import dr1 from './img/Doc1.jpg';
import dr2 from './img/Doc.png';


const getExperience = (years) => `${years} years of experience`;

const doctorsData = [
  {
    name: `Dr. John Doe`,
    specialty: `Cardiologist`,
    experience: getExperience(10), // Adding 5 years of experience
    image: dr1
  },
  {
    name: `Dr. Jane Smith`,
    specialty: `Neurologist`,
    experience: getExperience(5), // Adding 5 years of experience
    image: dr2
  },
  // Add more doctor objects as needed
];

const DoctorsSection = () => (
  <div className="doctors">
    <h1 className="doctors__title">Our Doctors</h1>
    <div className="doctors__list">
      {doctorsData.map((doctor, index) => (
        <Doctor
          key={index}
          name={doctor.name}
          specialty={doctor.specialty}
          experience={doctor.experience} // Pass experience to Doctor component
          image={doctor.image}
        />
      ))}
    </div>
  </div>
);

export default DoctorsSection;