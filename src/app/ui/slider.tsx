'use client'
import React, { useEffect, useState, FunctionComponent } from "react";



interface Slide {
    id: number;
    title: string;
    tagline: string;
    image: string;

}

interface ButtonProps {
    id: number;
    text: string;
    link: string;
    type: string;
}

interface DemoSliderProps {
    data: Slide[];
}
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Autoplay, Parallax, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";


// init Swiper:
/* const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    ...
  }); */
const Slider: FunctionComponent<DemoSliderProps> = ({ data }) => {
    const [parallaxSwiper, setparallaxSwiper] = useState(null)
    const parallaxOpacity = 0.5;
    return (
        <div className=' relative h-700 w-full'>

            <Swiper
                parallax={true}
                spaceBetween={30}
                speed={500}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map(({ id, image, tagline, title }) => (
                    <SwiperSlide key={id} >

                        <div className="relative m-0 w-full  h-[590px]
                          " >

                            <Image
                                src={image}
                                width={1000}
                                height={500}
                                className=" w-full h-full aspect-video hover:aspect-square"
                                alt="Screenshots of the dashboard project showing desktop and mobile versions"
                            />
                            {/* Content overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-black text-2xl font-bold">
                                    {tagline && (
                                        <p className="text-md sm:text-xl lg:text-3xl font-semibold text-black">
                                            {tagline}
                                        </p>
                                    )}
                                    <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-black">
                                        {title}
                                    </p>
                                    {/*        {buttons.length > 0 ? (
                                        <Button variant={'filled'} text='Shop' className="text-base bg-[teal]" >
                                            Shop
                                        </Button>


                                    ) : null} */}
                                </div>
                            </div>
                        </div>



                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;