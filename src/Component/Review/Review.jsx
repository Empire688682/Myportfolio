import React from 'react';
import styles from './Review.module.css'
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { AllReview } from 'public/reviewData';
import Image from 'next/image';

const Review = () => {
    return (
       <div className={styles.review}>
         <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}
        loop={true}
        autoplay={{ 
            delay: 3000, // Time between transitions (3000ms = 3 seconds)
            disableOnInteraction: false, // Autoplay will not stop after user interactions
          }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
          <div className={styles.review_cart}>
          {
                AllReview.map((review) =>{
                    return <SwiperSlide key={review.id} className={styles.review_slider}>
                        <div className={styles.img_Con}><Image src={review.imageSrc} alt='' fill/></div>
                        <h3>{review.name}</h3>
                        <p>{review.body}</p>
                    </SwiperSlide>
                })
            }
          </div>
      </Swiper>
       </div>
    )
}

export default Review
