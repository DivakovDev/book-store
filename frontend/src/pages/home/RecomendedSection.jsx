import { useEffect, useState } from "react";
import { BookCard } from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import { Pagination, Navigation} from "swiper/modules";

export const RecomendedSection = () => {
     const [books, setBooks] = useState([]);
     
      useEffect(() => {
        fetch("books.json")
          .then((res) => res.json())
          .then((data) => setBooks(data));
      }, []);

  return (
    <div className='pt-10 pb-16'>
      <h2 className="mb-6 text-3xl font-semibold">Recommended for you</h2>
      <div className="flex items-center">
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
        books.slice(8,16).map((book, index) => (
          <SwiperSlide key={index}>
            <BookCard book={book} />
          </SwiperSlide>
        ))
        }
      </Swiper>
      </div>
    </div>
  )
}
