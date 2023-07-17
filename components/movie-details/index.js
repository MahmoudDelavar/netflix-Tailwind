import Image from 'next/image';
import Navbar from '../layer/navbar';
import { imageBaseUrl } from '../../utils/constant';
// import { imageBaseUrl } from '../../utils/constant';
import { FaPlay } from 'react-icons/fa';
import { IoIosInformationCircle } from 'react-icons/io';
//=================================================
const MovieDetails = ({ movie }) => {
  //   console.log('movie', movie);
  const img_ul = imageBaseUrl + movie?.backdrop_path;
  console.log('urd', img_ul);
  return (
    <>
      <Navbar />
      <div className='containre'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 h-[100vh]'>
          {/* {img_ul && (
            <Image
              fill
              src='https://image.tmdb.org/t/p/w500/qe0oK0A5ovrlgH39Ga13dxxw9MU.jpg'
              className='object-cover'
              alt='movie poster'
            />
          )} */}

          <img src={img_ul} alt='ing' />

          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            {movie?.title || movie?.name || movie?.orginal_name}
          </h1>
          <p className='max-w-xs txte-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
            {movie?.overview}
          </p>

          <div className='flex space-x-3'>
            <button
              //  onClick={
              //     () => {
              //     setShowPlayer(true)}
              //     }
              className='bannerButton bg-white text-black'
            >
              <FaPlay /> play
            </button>
            <button className='bannerButton bg-[gray]/70'>
              <IoIosInformationCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
