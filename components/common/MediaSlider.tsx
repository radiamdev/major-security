import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

// Liste de tous les médias
const mediaSlides = [
    { type: 'image', src: '/images/about/slide1.jpg' },
    { type: 'video', src: '/videos/video1.mp4' },
    { type: 'image', src: '/images/about/slide2.webp' },
    { type: 'video', src: '/videos/video2.mp4' },
]

export default function MediaSlider() {
    return (
        <div className="w-full h-auto">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop
                spaceBetween={20}
                className="rounded-none overflow-hidden"
            >
                {mediaSlides.map((media, index) => (
                    <SwiperSlide
                        key={media.src}
                        className="flex justify-center items-center"
                    >
                        {media.type === 'image' ? (
                            <img
                                src={media.src}
                                alt={`slide-${index}`}
                                className="w-full h-auto object-contain max-h-[500px]"
                            />
                        ) : (
                            <video
                                className="w-full h-auto object-contain max-h-[500px]"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src={media.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
