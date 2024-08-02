import React, { useState } from 'react';
import './newcss.css'; // Assuming you have a CSS file for styles

const Department = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
  
    const toggleModal = (content = '') => {
      setIsModalOpen(!isModalOpen);
      setModalContent(content);
    };
  
    return (
      <section className="qualification__section service__section" id="qualification">
        <h2 className="section__title">Our Department</h2>
        <span className="section__subtitle">in hospital</span>
        <div className="qualification__container container grid services__container">
          <div className="qualification__tabs">
            <div className="qualification__button button--flex qualification__active" data-target="#education">
              <i className="uil uil-graduation-cap qualification__icon" />
              Department
            </div>
          </div>
          <div className="qualification__sections">
            <div className="qualification__content qualification__active services__content" data-content id="education">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Cardiology</h3>
                  <span className="qualification__subtitle">Hospital <br />---</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt" />
                    - 2020
                  </div>
                  <span
                    className="button button--flex button--small button--link services__button"
                    onClick={() => toggleModal('Cardiology Department details...')}
                  >
                    View More
                    <i className="uil uil-arrow-right button__icon" />
                  </span>
                </div>
                <div>
                  <span className="qualification__rounder" />
                  <span className="qualification__line" />
                </div>
              </div>
  
              <div className="qualification__data">
                <div />
                <div>
                  <span className="qualification__rounder" />
                  <span className="qualification__line" />
                </div>
                <div>
                  <h3 className="qualification__title">Neurology</h3>
                  <span className="qualification__subtitle">Hospital <br />---</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt" />
                    - 2021
                  </div>
                  <span
                    className="button button--flex button--small button--link services__button"
                    onClick={() => toggleModal('Neurology Department details...')}
                  >
                    View More
                    <i className="uil uil-arrow-right button__icon" />
                  </span>
                </div>
              </div>
  
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Orthopedics</h3>
                  <span className="qualification__subtitle">Hospital <br />---</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt" />
                    - 2022
                  </div>
                  <span
                    className="button button--flex button--small button--link services__button"
                    onClick={() => toggleModal('Orthopedics Department details...')}
                  >
                    View More
                    <i className="uil uil-arrow-right button__icon" />
                  </span>
                </div>
                <div>
                  <span className="qualification__rounder" />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {isModalOpen && (
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">Department Summary:</h4>
              <i className="uil uil-times services__modal-close" onClick={toggleModal} />
              <p>{modalContent}</p>
            </div>
          </div>
        )}
      </section>
    );
  };

export default Department;
