import { Image } from '@nextui-org/react'
import Link from 'next/link'
/* import ImageExample from '../../../public/0.jpg' */
import Image1 from '../../../public/absctract.jpg'
import SvgIconStar from './icon/StarIconSvg';
const CardsProducts = ({ id, title, tagline, image }: any) => {

    const numIcons = 5
    return (
        <div
            className='w-full max-w-sm m-1 rounded-lg border border-gray-200 
        bg-white shadow dark:border-gray-700 dark:bg-gray-800'
        >
            <Image
                src={image}
                className='rounded-t-lg p-8 opacity-100'
                width={500}
                height={600}
                alt={'Banner'}
            />

            <div className='px-5 pb-5'>
                <Link key={'id'} href={'/product-page/'}>
                    <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                        {tagline}
                    </h5>
                </Link>
                <div className='mb-5 mt-2.5 flex items-center'>
                    <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                        {Array.from({ length: numIcons }).map((_, index) => (
                            <SvgIconStar key={index} />
                        ))}
                    </div>
                    <span className='ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800'>
                        5.0
                    </span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                        $599
                    </span>
                    <a
                        href='#'
                        className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        Me interesa
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardsProducts
