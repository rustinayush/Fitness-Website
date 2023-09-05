
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Swiper.css"
import image1 from '../../assets/swiper-item/1.JPG';
import image2 from '../../assets/swiper-item/2.JPG';
import image3 from '../../assets/swiper-item/3.JPG';
import image4 from '../../assets/swiper-item/4.JPG';
import image5 from '../../assets/swiper-item/5.JPG';
import image6 from '../../assets/swiper-item/6.JPG';


const data = [
  {
    id: 1,
    username: 'item2',
    image: image1,
  },

  {
    id: 2,
    username: 'item2',
    image: image2,
  },
  {
    id: 3,
    username: 'item3',
    image: image3,
  },
  {
    id: 4,
    username: 'item4',
    image: image4,
  },
  {
    id: 5,
    username: 'item4',
    image: image5,
  },
  {
    id: 6,
    username: 'item4',
    image: image6,
  },
];

const Swiped = () => {
  return (
    <div ClassName='swiper-container-wrapper'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}

        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper-container"
        loop={true}
        breakpoints={{

          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >

        {data.map((item) => (
          <SwiperSlide key={item.id} className="swiper-slide2">

            <div>

              <img src={item.image} alt={`Image ${item.id}`} />
              <div><h4>{item.test}</h4></div>
              <div>{item.Description}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiped;
