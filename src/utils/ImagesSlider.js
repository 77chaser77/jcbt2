import testImage2 from '../imgs/test2.png'
import testImage from '../imgs/test.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import '../styles/Slider.css'

const ImageSliderContainer = () => {
  const imagesData = [
    { url: testImage2, alt: 'test2' },
    { url: testImage, alt: 'test1' },
  ]

  return (
    <div>
      <h2>Slider</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiper_container"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {imagesData.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.url} alt={image.alt} />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default ImageSliderContainer
