

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css'
import { EffectCube } from 'swiper/modules';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import img1 from '../../../public/bed 1.jpg'
import img2 from '../../../public/bed 2.jpg'
import img3 from '../../../public/bed 3.jpg'



const Slider = () => {

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
            spaceBetween={50}
            slidesPerView={1}
            effect="EffectCube"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}


        >


            <SwiperSlide><img className=' md:w-full md:h-screen rounded-3xl ' src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img className=' md:w-full md:h-screen  rounded-3xl ' src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img className=' md:w-full md:h-screen  rounded-3xl ' src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img className=' md:w-full md:h-screen  rounded-3xl ' src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img className=' md:w-full md:h-screen  rounded-3xl ' src={img2} alt="" /></SwiperSlide>


        </Swiper>

    );
};

export default Slider;