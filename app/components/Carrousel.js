import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = ({ items }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <div>
            <Image src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
