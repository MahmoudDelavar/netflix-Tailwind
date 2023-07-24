import Image from 'next/image';
import Link from 'next/link';
import { imageBaseUrl } from '../../utils/constant';

const Thumbnail = ({ movie }) => {
  return (
    <Link
      className='relative h-28 w-28 cursor-pointer transition duration-200 ease-out  md:h-36 md:min-w-[260px] md:hover:scale-105'
      href={`/videos/${movie.id}`}
    >
      <img
        src={`${imageBaseUrl}${movie.backdrop_path || movie.poster_path}`}
        alt='thumbnail'
        className='rounded-sm object-cover md:rounded '
      />
    </Link>
  );
};

export default Thumbnail;
