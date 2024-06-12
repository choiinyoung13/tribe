import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import banner1 from "../../assets/images/banner/banner_image_1.jpg";
import banner2 from "../../assets/images/banner/banner_image_2.jpg";
import banner3 from "../../assets/images/banner/banner_image_3.jpg";
import banner_mobile_1 from "../../assets/images/banner/banner_mobile_image1.jpg";
import banner_mobile_2 from "../../assets/images/banner/banner_mobile_image2.jpg";
import banner_mobile_3 from "../../assets/images/banner/banner_mobile_image3.jpg";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function Banner() {
  const windowWidth = useWindowWidth();

  return (
    <StyledSwiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
    >
      <StyledSwiperSlide bgColor="rgba(1, 10, 9, 1)">
        <img
          src={windowWidth <= 600 ? banner_mobile_1 : banner1}
          alt="Banner 1"
        />
      </StyledSwiperSlide>
      <StyledSwiperSlide bgColor="rgba(248, 225, 212, 1)">
        <img
          src={windowWidth <= 600 ? banner_mobile_2 : banner2}
          alt="Banner 2"
        />
      </StyledSwiperSlide>
      <StyledSwiperSlide bgColor="rgba(216, 223, 227, 1)">
        <img
          src={windowWidth <= 600 ? banner_mobile_3 : banner3}
          alt="Banner 2"
        />
      </StyledSwiperSlide>
      <NavigationButton className="swiper-button-prev prev"></NavigationButton>
      <NavigationButton className="swiper-button-next next"></NavigationButton>
    </StyledSwiper>
  );
}

const StyledSwiper = styled(Swiper)`
  position: relative;
  top: 120px; // nav 높이
  width: 100%;

  @media (max-width: 1024px) {
    top: 90px;
  }

  @media (max-width: 768px) {
    top: 74px;
  }

  @media (max-width: 600px) {
    top: 60px;
  }
`;
interface SliderType {
  bgColor: string;
}

const StyledSwiperSlide = styled(SwiperSlide)<SliderType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: ${({ bgColor }) => bgColor};

  img {
    min-width: 50%;
    width: 960px;
  }

  @media (max-width: 768px) {
    img {
      min-width: 50%;
      max-width: 960px;
    }
  }

  @media (max-width: 600px) {
    img {
      min-width: 50%;
    }
  }
`;

const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    color: rgba(150, 150, 150, 1);
    font-size: 2rem;
  }

  &:hover {
    &::after {
      color: rgba(20, 20, 20, 1);
    }
  }

  &.prev {
    left: 40px;
  }

  &.next {
    right: 40px;
  }

  @media (max-width: 600px) {
    &::after {
      color: rgba(150, 150, 150, 1);
      font-size: 1.5rem;
    }

    &.prev {
      left: 20px;
    }

    &.next {
      right: 20px;
    }
  }
`;
