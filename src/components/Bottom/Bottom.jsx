import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Bottom.css"
import image1 from '../../assets/end-item/1.JPG';
import image2 from '../../assets/end-item/2.JPG';
import image3 from '../../assets/end-item/3.JPG';



const data = [
  {
    id: 1,
    username: 'item2',
    topic: 'ATHLETES COMMUNITY RUNNING',
    title: 'The Starting Line: Running Tips For Beginners',
    description: 'Running is more than just putting one foot in front of the other; its a journey of self-discovery, endurance, and empowerment. From the brisk morning jogs of beginners to the...',
    rd: 'READ MORE',
    image: image1,
  },

  {
    id: 2,
    username: 'item2',
    topic: 'COMMUNITY INTERNATIONALYOGADAY MINDFULNESS YOGA',
    title: 'Beyond The Yoga Mat',
    description: 'Content warning: The following article mentions mental illness and eating disorders. We associate Yoga with physical postures, breathing exercises, and meditation - all things practised on a mat. However, the...',
    rd: 'READ MORE',
    image: image2,
  },
  {
    id: 3,
    username: 'item3',
    topic: 'COMMUNITY FITNESS FITNESSINSPIRATION TRAINERS',
    title: 'Passion For Progress: Practices Fitness Trainers Swear By',
    description: 'How many of us, at some point in our lives, believed that success and greatness belong to the few gifted ones? That there are prerequisites to greatness some people are just born with. When you listen to the great ones though, you realise they were once ordinary.',
    rd: 'READ MORE',
    image: image3,
  },

];

const Bottom = () => {
  return (
    <div ClassName='main-container'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}

        navigation

        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper-container-button"
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

              <img src={item.image} alt={` ${item.id}`} />
              <div className='text-part'>
                <div><p style={{ textDecoration: "underline", fontSize: "10px", fontWeight: "bold" }}>{item.topic}</p></div>
                <div><h3>{item.title}</h3></div>
                <div><p>{item.description}</p></div>
                <div><p style={{ textDecoration: "underline", fontSize: "14px", fontWeight: "bold", textDecorationColor: "red" }}>{item.rd}</p></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bottom;
