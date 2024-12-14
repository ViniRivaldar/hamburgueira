import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ items }) => {
  
  const filteredItems = items.filter(product => product.offer === true);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Swiper 
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      className="w-full max-w-[1200px]"
    >
      {filteredItems.map((product) => (
        <SwiperSlide key={product.id} className="flex justify-center">
          <div className="flex flex-col items-center">
            {product.foto_products && product.foto_products.length > 0 ? (
              <Image 
                src={product.foto_products[0].url} 
                alt={product.name} 
                width={200} 
                height={200} 
                className="w-[282.793px] h-[283px] rounded-lg object-cover mt-[36px] mb-[16px]"
              />
            ) : (
              <div className="w-[200px] h-[200px] bg-gray-200 flex items-center justify-center">
                Sem imagem
              </div>
            )}
            <div className="flex flex-col items-start w-full mb-5 p-2">
              <p className="text-left w-full mb-1">{product.name}</p>
              <p className="text-left w-full font-bold">{formatPrice(product.price)}</p>
            </div>
            <Link
              href={`/produto/${product.id}`} 
              className="px-[48px] py-[21px] text-[24px] bg-[#9758A6] text-white rounded-md hover:bg-[#804686] transition w-[282.793px] text-center mb-14"
            >
              Saiba mais 
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
