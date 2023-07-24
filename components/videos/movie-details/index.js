import Image from 'next/image';
import Navbar from '../../layout/navbar';

import { FaPlay } from 'react-icons/fa';
import { IoIosInformationCircle } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import dynamic from 'next/dynamic';
import { imageBaseUrl } from '../../../utils/constant';
const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false,
});

//=================================================
const MovieDetails = ({ movie, showPlayer, setShowPlayer, trailerURL }) => {
  console.log(
    'url',
    `${imageBaseUrl}${movie?.backdrop_path || movie?.poster_path}`
  );
  return (
    <>
      <Navbar />
      <div className=' h-auto'>
        <div className='flex flex-col h-auto justify-center'>
          {/*------------- poster set to background------------- */}
          <div className='relative top-0 left-0 -z-10 '>
            {/* <Image
              fill
              src={`${imageBaseUrl}${
                movie?.backdrop_path || movie?.poster_path
              }`}
              className='object-cover'
              alt='movie poster'
            /> */}
            <img
              width={'100%'}
              src={`${imageBaseUrl}${
                movie?.backdrop_path || movie?.poster_path
              }`}
              alt='poster'
            />

            <div className='relative  sm:absolute text-white bottom-0 px-2 '>
              {/*------------- title of random movie------------- */}
              <h1 className='text-xl font-bold md:text-4xl lg:text-7xl'>
                {movie?.title || movie?.name || movie?.original_name}
              </h1>

              {/*---------- discription of random movie---------- */}
              <p className='max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
                {movie?.overview}
              </p>

              {/*------------ play and more info btn ------------ */}
              <div className='flex space-x-3'>
                <button
                  className='bannerButton bg-white text-black'
                  onClick={() => {
                    setShowPlayer(true);
                  }}
                >
                  <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7' />
                  Play
                </button>

                <button className='bannerButton bg-[gray]/70'>
                  <IoIosInformationCircle className='h-5 w-5 md:h-8 md:w-8' />
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*----------- video player and close btn----------- */}
        <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
            showPlayer ? 'opacity-100 z-50' : 'opacity-0 -z-10'
          }`}
        >
          <div className='flex items-center justify-between bg-black text-[#f9f9f9] p-3.5'>
            <span className='font-semibold'>Play Trailer</span>
            <div
              className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]'
              onClick={() => setShowPlayer(false)}
            >
              <AiOutlineClose className='h-5' />
            </div>
          </div>

          <div className='relative pt-[56.25%]'>
            <ReactPlayer
              url={trailerURL}
              width='100%'
              height='100%'
              style={{ position: 'absolute', top: '0', left: '0' }}
              controls={true}
              playing={showPlayer}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
