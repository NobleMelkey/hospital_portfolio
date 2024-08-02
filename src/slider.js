import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import dp1 from './img/dp1.jpg';
import dp2 from './img/dp2.jpg';
import './newcss.css';

const TestimonialSection = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">Most recent Testimonial</span>
      <div className="portfolio__container container">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop={true}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="portfolio__content grid">
              <img src={dp1} className="portfolio__img" alt="Testimonial 1" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Noble</h3>
                <p className="portfolio__description">
                  "The doctors and staff at [Hospital Name] were exceptional. I received excellent care."
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="portfolio__content grid">
              <img src={dp2} className="portfolio__img" alt="Testimonial 2" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Noe</h3>
                <p className="portfolio__description">
                  "The doctors and staff at [Hospital Name] were exceptional. I received excellent care."
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>

        {/* Add Pagination */}
        <div className="swiper-pagination"></div>

        {/* Add Navigation Buttons */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;
