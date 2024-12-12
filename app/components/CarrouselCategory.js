import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ items }) => {
  return (
    <Swiper 
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      className="w-full max-w-[1200px]"
    >
      {items.map((category) => (
        <SwiperSlide key={category.id} className="flex justify-center">
          <div className="flex flex-col items-center">
            {category.foto_category && category.foto_category.length > 0 ? (
              <Image 
                src={category.foto_category[0].url} 
                alt={category.name} 
                width={200} 
                height={200} 
                className="w-[282.793px] h-[283px] rounded-lg object-cover mt-[36px] mb-[16px]"
              />
            ) : (
              <div className="w-[200px] h-[200px] bg-gray-200 flex items-center justify-center">
                Sem imagem
              </div>
            )}
            <Link
              href={`/produto/${category.id}`} 
              className="px-[48px] py-[21px] text-[24px] bg-[#9758A6] text-white rounded-md hover:bg-[#804686] transition w-[282.793px] text-center mb-14"
            >
              {category.name}
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;