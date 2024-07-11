"use client"
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { H2 } from '../common/Heading'
import { relatedSliderList } from '../common/Helper'



const Related = () => {
  return (
    <div className='py-12 sm:py-16 md:py-20 lg:py-[120px]'>
      <div className='container mx-auto max-w-[1172px] px-4'>
        <div className='flex flex-col items-center justify-center'>
          <H2 className="text-3xl1 sm:text-4xl md:text-4xl1 !text-center after:left-1/2 after:-translate-x-1/2 after:bg-yellow" heading="Related Articles" />
          <p className='opacity-80 max-w-[601px] pt-6 md:pt-9 pb-6 md:pb-14 text-lightBlack font-medium text-lg sm:text-xl md:text-2xl leading-130 text-center'>Eget mattis ac venenatis m. Sem diam facilisi scelerisque tellus suscipit felis a tempus. arius at pulvinar dictum</p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
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
          {relatedSliderList.map((obj, index) => (
            <SwiperSlide key={index}>
              <div className='flex items-center justify-center'>
                <div className='border border-offGray bg-white lg:max-w-[364px] w-full'>
                  <Image src={obj.image} alt={obj.title} />
                  <div className='p-4'>
                    <h4 className='text-lightBlack font-bold text-2xl md:text-2xl1 leading-120 mb-2'>{obj.title}</h4>
                    <p className='opacity-80 max-w-[503px] w-full mb-3 text-lightBlack font-medium text-lg sm:text-xl md:text-2xl leading-130'>{obj.description}</p>
                    <a className='font-medium text-lg leading-130 text-skuBlue underline' href={obj.link}>Read more</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Related
