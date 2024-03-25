import Image from 'next/image'
import absctractImage from '../../public/emotions-3459666_1280.jpg'
import Slider from './ui/slider'

import SectionInfo from './(view)/components/section-information'
import Footer from './ui/Footer'
import AppleImage from '../../public/0.jpg'
import Link from 'next/link'
import CardsProducts from './ui/cards'
import { mockData } from '../app/lib/data';
export default function Home() {

  //  <div className="h-64  bg-center" style={{ backgroundImage: `url(${PaperImage})` }}>
  return (
    <div className='flex w-full flex-col items-center '>
      <div className='border-r-light-blue-500 mb-5  w-5/6 justify-center px-3 md:flex'>
        {/*       <Slider data={dataSlider} /> */}
      </div>
      <div className='relative w-full'>
        <Image
          src={absctractImage}
          className='h-auto w-full'
          /* width={500} */
          height={600}
          alt={'Banner'}
        />
        {/* <img alt='Banner' className='h-auto w-full' /> */}
        <div className='absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-black bg-opacity-0'>
          <h2 className='mb-4 text-2xl font-[500] text-yellow'>
            Regalos personalizados y publicitarios para ti o tu empresa
            <strong> Para ti o tu empresa</strong>
          </h2>
          <a
            href='#'
            className='rounded bg-blue-500 px-4 py-2 text-lg text-white transition duration-300 hover:bg-blue-700'
          >
            Ver Más
          </a>
        </div>
      </div>


      {/* start other section */}
      <section className="bg-white p-4">
        <SectionInfo />
      </section>


      <div className="flex flex-col w-full items-center bg-blue-white justify-center mt-10">
        <h4 className="pb-2 text-[18px] text-[#ff4c3b] leading-6">
          Special Offer
        </h4>
        <h2
          className="pb-3 text-[18px] text-[#222] font-bold tracking-tight 
                uppercase md:text-[24px] lg:text-[28px] xl:text-[32px] "
        >

          TOP COLLECTION
        </h2>

        <div className="flex flex-wrap items-center text-center justify-center w-full max-w-[700px] mx-auto">
          <p className="pb-[25px] mb-[15px] mt-[-7] text-[18px] text-[#777] tracking-tighter leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </p>
        </div>

        {/* 
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our featured Aroma Range</h2>
          <p className="mt-4 text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
        </div>
 */}
        <div className="flex flex-wrap justify-center my-7">
          {mockData.map((product: any) => (
            <CardsProducts key={product.id} {...product} />
          ))}
        </div>

        <h2
          className="pb-3 text-[18px] text-[#222] font-bold tracking-tight 
                uppercase md:text-[24px] lg:text-[28px] xl:text-[32px] "
        >
          Our featured Aroma Range
        </h2>

        <div className="flex flex-wrap items-center text-center justify-center w-full max-w-[700px] mx-auto">
          <p className="pb-[25px] mb-[15px] mt-[7]ext-base text-gray-700 tracking-tighter leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </p>

        </div>
      </div>
      <Footer />
    </div>
  )
}
