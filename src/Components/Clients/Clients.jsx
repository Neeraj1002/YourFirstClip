import React, { memo, useRef } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
// Libraries
import { m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { PropTypes } from "prop-types";

// Data
import { ClientData02 } from "./ClientsData";

const ClientCarouselSwitch = (params, item, i) => {
  switch (params.theme) {
    case "client-logo-style-06":
      return (
        <SwiperSlide key={i}>
          <div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) =>
              index < item.rating ? (
                <FaStar key={index} className="text-yellow-500" />
              ) : (
                <FaRegStar key={index} className="text-gray-300" />
              )
            )}
          </div>
        </SwiperSlide>
      );
    default:
      return (
        <SwiperSlide key={i}>
          <div className="client-box">
            <div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) =>
                index < item.rating ? (
                  <FaStar key={index} className="text-yellow-500" />
                ) : (
                  <FaRegStar key={index} className="text-gray-300" />
                )
              )}
            </div>
          </div>
        </SwiperSlide>
      );
  }
};

const Clients = (props) => {
  const swiperRef = useRef(null);
  return (
    <m.div
      className={`client-slider-wrapper relative${
        props.className ? ` ${props.className}` : ""
      }`}
      {...props.animation}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        className={props.theme}
        modules={[Navigation, Pagination, Autoplay]}
        {...props.carouselOption}
      >
        {props.data.map((item, i) => {
          return ClientCarouselSwitch(props, item, i);
        })}
      </Swiper>
      {props.carouselOption.navigation && (
        <>
          <div
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="swiper-button-prev absolute"
          ></div>
          <div
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="swiper-button-next absolute"
          ></div>
        </>
      )}
    </m.div>
  );
};

Clients.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.string,
      target: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  animation: PropTypes.object,
  animationDelay: PropTypes.number,
  theme: PropTypes.string,
  grid: PropTypes.string,
  carousel: PropTypes.bool,
  carouselOption: PropTypes.object,
};

export default memo(Clients);
