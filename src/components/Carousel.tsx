import React, { useRef } from "react";
// PLUGINS
import { Navigation, Pagination, Autoplay, SwiperOptions } from "swiper";
import { Swiper } from "swiper/react/swiper-react";
// ICONS

// STYLES
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "../pages/styles.css";

type props = SwiperOptions & {
  children?: React.ReactNode;
  autoPlay?: boolean;
  showButtons?: boolean;
};

const Carousel = ({
  children,
  loop = true,
  autoPlay = true,
  spaceBetween = 76,
  slidesPerView = 4,
  showButtons = true,
  pagination = true,
  ...otherProps
}: props): JSX.Element => {
  const navigationPrevRef = useRef(null);

  const navigationNextRef = useRef(null);

  return (
    <div
      className="swiper-container"
      style={{ position: "relative", minWidth: 0 }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={pagination && { clickable: true }}
        loop={loop}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        autoplay={autoPlay && { delay: 5000 }}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        {...otherProps}
      >
        {children}

        <div style={!showButtons ? { display: "none" } : {}}>
          <button
            type="button"
            className="swiper-btn-prev"
            ref={navigationPrevRef}
          >
            prev
          </button>

          <button
            type="button"
            className="swiper-btn-next"
            ref={navigationNextRef}
          >
            next
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
