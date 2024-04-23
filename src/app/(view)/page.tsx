import Image from 'next/image'
import absctractImage from 'public/emotions-3459666_1280.jpg'
import AppleImage from '../../public/0.jpg'
import Link from 'next/link'
import SectionInfo from './components/section-information'
import { mockData } from '../lib/data'
import CardsProducts from '../ui/cards'
import Footer from '../ui/Footer'
import Slider from '../ui/slider'
import dataSlider from '../../app/lib/cards-data.json'
export default function Home() {
  //  <div className="h-64  bg-center" style={{ backgroundImage: `url(${PaperImage})` }}>
  return (
    <div className='flex w-full flex-col items-center '>
      <div className='border-r-light-blue-500 mb-5  w-5/6 justify-center px-3 md:flex'>
        {/*   <Slider data={dataSlider} /> */}
      </div>
      <div className='relative w-full'>

        <Image
          src={absctractImage}
          className=' w-full'
          /* width={500} */
          style={{ objectFit: 'cover' }}
          alt={'Banner'}
        />
        {/* <img alt='Banner' className='h-auto w-full' /> */}
        <div className='absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-black bg-opacity-0'>
          {/*  <h2 className='text-yellow mb-4 text-2xl font-[500]'>
            Regalos personalizados y publicitarios para ti o tu empresa
            <strong> Para ti o tu empresa</strong>
          </h2> */}
          <a
            href='#'
            className='rounded bg-blue-500 px-4 py-2 text-lg text-white transition duration-300 hover:bg-blue-700'
          >
            Ver Más
          </a>
        </div>
      </div>

      {/* start other section */}
      <section className='bg-white p-4'>
        <SectionInfo />
      </section>

      <div className='bg-blue-white mt-10 flex w-full flex-col items-center justify-center'>
        <h4 className='pb-2 text-[18px] leading-6 text-[#ff4c3b]'>
          Special Offer
        </h4>
        <h2
          className='pb-3 text-[18px] font-bold uppercase tracking-tight 
                text-[#222] md:text-[24px] lg:text-[28px] xl:text-[32px] '
        >
          TOP COLLECTION
        </h2>

        <div className='mx-auto flex w-full max-w-[700px] flex-wrap items-center justify-center text-center'>
          <p className='mb-[15px] mt-[-7] pb-[25px] text-[18px] leading-6 tracking-tighter text-[#777]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </p>
        </div>
        <div className='my-7 flex flex-wrap justify-center'>
          {mockData.map((product: any) => (
            <CardsProducts key={product.id} {...product} />
          ))}
        </div>

        <h2
          className='pb-3 text-[18px] font-bold uppercase tracking-tight 
                text-[#222] md:text-[24px] lg:text-[28px] xl:text-[32px] '
        >
          Our featured Aroma Range
        </h2>

        <div className='mx-auto flex w-full max-w-[700px] flex-wrap items-center justify-center text-center'>
          <p className='mt-[7]ext-base mb-[15px] pb-[25px] leading-6 tracking-tighter text-gray-700'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </p>
        </div>
      </div>

    </div>
  )
}
