import React, { useState, useEffect} from 'react';
import "./newcss.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './img/logo.jpg';
import DoctorsSection from './DoctorsSection';


const Landing1 = () => {
    // State to manage the visibility of the skills list
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    const [isOpen, setIsOpen] = useState(false);
  
    // Toggle the visibility
    const toggleSkills = () => {
      setIsOpen(!isOpen);
    };
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1, 
      autoplay: true,
      autoplaySpeed: 1400,
    };
  
    return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Hospital</title>
          <link rel="stylesheet" href="assets/swiper-bundle.min.css" />
          <link rel="stylesheet" href="assets/newcss.css" />
          <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
          <header className="header" id="header">
            <nav className="nav container">
              <a href="#" className="nav__logo">&gt;Hospital Name</a>
              <div className="nav__menu" id="nav-menu">
                <ul className="nav__list grid">
                  <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                      <i className="uil uil-estate nav__icon" />Home
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#about" className="nav__link">
                      <i className="uil uil-user nav__icon" />About
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#skills" className="nav__link">
                      <i className="uil uil-file-alt nav__icon" />Our Services
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#qualification" className="nav__link">
                      <i className="uil uil-briefcase-alt nav__icon" />Hospital Department

                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                      <i className="uil uil-scenery nav__icon" />Testimonial
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#contact" className="nav__link">
                      <i className="uil uil-message nav__icon" />Contact
                    </a>
                  </li>
                </ul>
                <i className="uil uil-times nav__close" id="nav-close" />
              </div>
              {/* <div className="nav__btns">
                Theme change button
                <i className="uil uil-moon change-theme" id="theme-button" />
                <div className="nav__toggle" id="nav-toggle">
                  <i className="uil uil-apps" />
                </div>
              </div> */}
            </nav>
          </header>
          {/* main*/}
          <main className="main">
            {/*========================= Home =====================*/}
            <section className="home section" id="home">
              <div className="home__container container grid">
                <div className="home__content grid">
                <div className="home__social">
  <a href="https://www.linkedin.com/in/noble-melchizedek-b91b351a4/" target="blank" rel="noopener noreferrer" className="home_social-icon">
    <i className="uil uil-linkedin-alt home__icon" />
  </a>
  <a href="https://facebook.com/your-profile" target="blank" rel="noopener noreferrer" className="home_social-icon">
    <i className="uil uil-facebook home__icon" />
  </a>
</div>
                  <div className="home__img">
                    <svg className="home__blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <mask id="mask0" mask-type="alpha">
                        <circle cx={100} cy={100} r={100} fill="white" />
                      </mask>
                      <g mask="url(#mask0)">
                        <circle cx={100} cy={100} r={100} fill="none" />
                        <image className="home__blob-img" x={-10} y={0} width={200} height={200} xlinkHref= {logo} />
                      </g>
                    </svg>
                  </div>
                  <div className="home__data">
                    <h1 className="home__title">New Life Hospital</h1>
                    <h3 className="home__subtitle">
                    Medical Professionals: Doctor, Surgeon, Nurse, Anesthesiologist, Pediatrician, Cardiologist, Oncologist, etc.
                    </h3>
                    <p className="home__description">
                    stands as a beacon of hope in the heart of the community. Its pristine white facade, adorned with green accents, exudes a sense of calm and reassurance. 
                    </p>
                    <a href="#contact" className="button button--flex">
                      Contact Hospital<i className="uil uil-message button__icon" />
                    </a>
                  </div>
                </div>
                <div className="home__scroll">
                  <a href="#about" className="home__scroll-button button--flex">
                    <i className="uil uil-mouse-alt home__scroll-mouse" />
                    <span className="home__scroll-name">Scroll down</span>
                    <i className="uil uil-arrow-down home__scroll-arrow" />
                  </a>
                </div>
              </div>
            </section>
            {/*======================= About========================*/}
            <section className="about section" id="about" style={{alignItems: 'center'}}>
              <h2 className="section__title">About Hospital</h2>
              <span className="section__subtitle">Introduction</span>
              <div className="about__container container grid">
                {/* <img src="assets\img\about.jpg" alt="" class="about__img" /> */}
                <div className="about__data">
                  <p className="about__description" styl>
                  We are thrilled to announce the grand opening of [Hospital Name], a state-of-the-art healthcare facility dedicated to providing exceptional care to our community. Our hospital is built on a foundation of compassion, expertise, and innovation. We are committed to delivering the highest quality medical treatments, combined with personalized attention to every patient. With a team of highly skilled professionals and advanced technology at our disposal, we are poised to redefine healthcare in the region.
                  </p><div className="about__info">
                    <div>
                      <span className="about__info-title">10000+ </span>
                      <span className="about__info-name">Client <br /></span>
                    </div>
                    <div>
                      <span className="about__info-title">04+</span>
                      <span className="about__info-name">
                      Doctor, Surgeon</span>
                    </div>
                    <div>
                      <span className="about__info-title">50+</span>
                      <span className="about__info-name">Nurse, Anesthesiologist <br />etc</span>
                    </div>
                  </div>
                  <div className="about__buttons">
                    {/* <a download href="assets\MyCV.pdf" className="button button--flex">
                      Download CV<i className="fas fa-download button__icon" />
                    </a> */}
                  </div>
                </div>
                <div className="about__img-container">
      <img src="https://media.istockphoto.com/id/1344779917/vector/medical-center-hospital-building-vector-design.jpg?s=612x612&w=is&k=20&c=ZJMt9Iv35q2Bnt822cYBDRpQDJolMl9WlEJY1xLbwCA=" alt="About Hospital" className="about__img" />
    </div>
              </div>
            </section>
            <DoctorsSection />
            {/*===================== SKILLS =====================*/}
            <section className="skills section" id="skills">
              <h2 className="section__title">Our Services</h2>
              <span className="section__subtitle">Our Services level</span>
              <div className="skills__container container grid">
                <div>
                  {/*==================== Skill 1 =================*/}
                  <div className={skills__content ${isOpen ? 'skills__open' : ''}}>
      <div className="skills__header" onClick={toggleSkills}>
        <i className="fas fa-pencil-ruler skills__icon" />
        <div>
          <h1 className="skills__title">Emergency Care</h1>
        </div>
        <i className={uil uil-angle-${isOpen ? 'up' : 'down'} skills__arrow} />
      </div>
      <div className={skills__list grid ${isOpen ? 'skills__list--open' : ''}}>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Geriatric Emergency Care</h3>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Pediatric Emergency Care</h3>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Obstetric Emergency Care</h3>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Acute Medical Care</h3>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Trauma Care</h3>
          </div>
        </div>
      </div>
    </div>
                  
                  <div className={skills__content ${isOpen ? 'skills__open' : ''}}>
      <div className="skills__header" onClick={toggleSkills}>
        <i className="fas fa-pencil-ruler skills__icon" />
        <div>
          <h1 className="skills__title">Emergency Care</h1>
        </div>
        <i className={uil uil-angle-${isOpen ? 'up' : 'down'} skills__arrow} />
      </div>
      <div className={skills__list grid ${isOpen ? 'skills__list--open' : ''}}>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Trauma Care</h3>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Acute Medical Care</h3>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Pediatric Emergency Care</h3>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Obstetric Emergency Care</h3>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Geriatric Emergency Care</h3>
          </div>
        </div>
      </div>
    </div>
                </div>
                <div>
                 
                  <div className={skills__content ${isOpen ? 'skills__open' : ''}}>
      <div className="skills__header" onClick={toggleSkills}>
        <i className="fas fa-pencil-ruler skills__icon" />
        <div>
          <h1 className="skills__title">Emergency Care</h1>
        </div>
        <i className={uil uil-angle-${isOpen ? 'up' : 'down'} skills__arrow} />
      </div>
      <div className={skills__list grid ${isOpen ? 'skills__list--open' : ''}}>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Geriatric Emergency Care</h3>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Obstetric Emergency Care</h3>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Pediatric Emergency Care</h3>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Acute Medical Care</h3>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Trauma Care</h3>
          </div>
        </div>
      </div>
    </div>
                </div>
              </div>
            </section>
            {/==================== Department ==================*/}
            <section className="qualification_section service_section" id="qualification">
              <h2 className="section__title">Our Department</h2>
              <span className="section__subtitle">in hospital</span>
              <div className="qualification_container container grid services_container">
                <div className="qualification__tabs">
                  <div className="qualification_button button--flex qualification_active" data-target="#education">
                    <i className="uil uil-graduation-cap qualification__icon" />
                    Department
                  </div>
                </div>
                <div className="qualification__sections">
                  {/====== Qualification Content 1 ======/}
                  <div className="qualification_content qualifiationactive services_content" data-content id="education">
                    {/====== Qualification 1 ======/}
                    <div className="qualification__data">
      <div>
        <h3 className="qualification__title">Cardiology</h3>
        <span className="qualification__subtitle">Hospital <br />Thoothukudi</span>
        <div className="qualification__calender">
          <i className="uil uil-calendar-alt" />
          - 2017
        </div>
        <span
          className="button button--flex button--small button--link services__button"
          onClick={toggleModal} // Open the modal on click
        >
          View More
          <i className="uil uil-arrow-right button__icon" />
        </span>
        {isModalOpen && (
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">Class 10th Summary :</h4>
              <i
                className="uil uil-times services__modal-close"
                onClick={toggleModal} // Close the modal on click
              />
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>
                    I completed my 10th grade at SPIC Nager, achieving a total of 379 marks. Throughout my schooling, I was actively interested in extracurricular activities, particularly Shuttle. As an athlete, I regularly participated in the Shuttle, as well as the single and doubles sprint events.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>Scored 74%</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div>
        <span className="qualification__rounder" />
        <span className="qualification__line" />
      </div>
    </div>
                    {/====== Qualification 2 ======/}
                    <div className="qualification__data">
                      <div />
                      <div>
                        <span className="qualification__rounder" />
                        <span className="qualification__line" />
                      </div>
                      <div>
                        <h3 className="qualification__title">Cardiology</h3>
                        <span className="qualification__subtitle">Hospital <br />---</span>
                        <div className="qualification__calender">
                          <i className="uil uil-calendar-alt" />
                          - 2020 
                        </div>
                        <span className="button button--flex button--small button--link services__button">
                          View More
                          <i className="uil uil-arrow-right button__icon" />
                        </span>
                        <div className="services__modal">
                          <div className="services__modal-content">
                            <h4 className="services__modal-title">
                              Diploma Summary :
                            </h4>
                            <i className="uil uil-times services__modal-close" />
                            <ul className="services__modal-services grid">
                              <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moda-icon" />
                                <p>
                                  In my Diploma grade at MSPVL Polytechnic College , I chose the EEE group.
                                </p>
                              </li><li><i className="uil uil-check-circle services__moda-icon" /><p>
                                  In my diplom i have done a project named Room Automaction .
                                </p>
                              </li>
                              <li className="services__modal-service">
                                <i className="uil uil-check-circle services__moda-icon" />
                                <p>Scored -87%</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/====== Qualification 3 ======/}
                    <div className="qualification__data">
                      <div>
                        <h3 className="qualification__title">Cardiology</h3>
                        <span className="qualification__subtitle">----</span>
                        <div className="qualification__calender">
                          <i className="uil uil-calendar-alt" />
                          2020 - 2023 
                        </div>
                        <span className="button button--flex button--small button--link services__button">
                          View More
                          <i className="uil uil-arrow-right button__icon" />
                        </span>
                        <div className="services__modal">
                          <div className="services__modal-content">
                            <h4 className="services__modal-title">College Summary :</h4>
                            <i className="uil uil-times services__modal-close" />
                            <ul className="services__modal-services grid">
                              <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon" />
                                <p>
                                  Completed a Bachelor of Engineering (BE).
                                </p>
                              </li>
                              <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon" />
                                <p>Scored an aggregate of 7.9-CGPA  out of 10 till now.</p>
                              </li>
                              <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon" />
                                <p>
                                  Specialized in Electrical and Electronics Engineering (EEE).
                                </p>
                              </li>
                              <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon" />
                                <p>
                                  During my time at college, I gained hands-on experience through various projects and practical labs. I was actively involved in coding competitions and technical workshops, which helped enhance my problem-solving and programming skills. My education has provided me with a strong foundation in both theoretical concepts and practical applications, preparing me for a successful career in software development and&nbsp;related&nbsp;fields.
                                </p>
                              </li>
                              {/* <li class="services__modal-service">
                            <i
                              class="uil uil-check-circle services__modal-icon"
                            ></i>
                            <p>
                              CodeBlaze hackathon winners under open innovation.
                            </p>
                          </li> */}
                              {/* <li class="services__modal-service">
                            <i
                              class="uil uil-check-circle services__modal-icon"
                            ></i>
                            <p>
                              Finalist in Dark Pattern Buster Hackathon conducted by Department of Consumer Affairs of India.
                            </p>
                          </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder" />
                        {/<span class="qualification__line"></span>/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/=================== Portfolio ===================/}
            <Slider {...settings}>
      <div>
      <h2 className="section__title">About Hospital</h2>
        <img src={""} alt="Slide 1"  style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div>
        <img src={""} alt="Slide 2"  style={{ maxWidth: '100%', height: 'auto' }}  />
      </div>
      <div>
        <img src={""} alt="Slide 2"  style={{ maxWidth: '100%', height: 'auto' }}  />
      </div>
    </Slider>            {/===================== Contact Me =====================/}
            <section className="contact section" id="contact">
              <h2 className="section__title">Contact Me</h2>
              <span className="section__subtitle">Get in touch</span>
              <div className="contact__container container grid">
                <div>
                  <div className="contact__information">
                    <i className="uil uil-calling contact__icon" />
                    <div>
                      <h3 className="contact__title">Contact Me</h3>
                      <span className="contact__subtitle"><a href="tel:8072586621" />8072586621</span>
                    </div>
                  </div>
                  <div className="contact__information">
                    <i className="uil uil-envelope-minus contact__icon" />
                    <div>
                      <h3 className="contact__title">Email</h3>
                      <span className="contact__subtitle">noblesam66@gmail.com</span>
                    </div>
                  </div>
                  <div className="contact__information">
                    <i className="uil uil-map-marker contact__icon" />
                    <div>
                      <h3 className="contact__title">Location</h3>
                      <span className="contact__subtitle">India, Tamil Nadu , Thoothukudi</span>
                    </div>
                  </div>
                </div>
                <form action className="contact__form grid">
                  <div className="contact__inputs grid">
                    <div className="contact__content">
                      <label htmlFor className="content__label">Name</label>
                      <input type="text" className="contact__input" />
                    </div>
                    <div className="contact__content">
                      <label htmlFor className="content__label">Email</label>
                      <input type="Email" className="contact__input" />
                    </div>
                  </div>
                  <div className="contact__content">
                    <label htmlFor className="content__label">Message</label>
                    <textarea name id cols={0} rows={7} className="contact__input" defaultValue={""} />
                  </div>
                  <div>
                    <a href=" mailto:noblesam66@gmail.com?subject=Testing out mailto! &body=Hii hello Noble lets connet though the mail!" className="button button--flex">
                      Send Message
                      <i className="uil uil-message button__icon" />
                    </a>
                  </div>
                </form>
              </div>
            </section>
          </main>
          {/================== Footer ===============/}
          <footer className="footer">
            <div className="footer__bg">
              <div className="footer__container container grid">
                <div>
                  <h1 className="footer__title">New hospital </h1>
                  <span className="footer__subtitle">Thoothukudi </span>
                </div>
                <ul className="footer__links">
                  <li>
                    <a href="#qualification" className="footer__link">Department</a>
                  </li>
                  <li>
                    <a href="#portfolio" className="footer__link">Testimonial</a>
                  </li>
                  <li>
                    <a href="#contact" className="footer__link">Contact-Me</a>
                  </li>
                </ul>
                <div className="footer__socials">
                  <a href className="footer_social" target="_blank">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="https://www.instagram.com/noble_melkey" target="_blank" className="footer_social">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </div>
              </div>
              <p className="footer__copy">© @--- . All right reserved</p>
            </div>
          </footer>
          {/================== SCROLL TOP ==================/}
          <a href="#" className="scrollup" id="scroll-up">
            <i className="uil uil-arrow-up scrollup__icon" />
          </a>
        </div>
      );
    }
    
    export default Landing1;