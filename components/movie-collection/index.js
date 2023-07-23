import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Thumbnail from '../utils/thumbnail';
//============================================================
const MovieCollection = ({ title, movies }) => {
  console.log('movies', movies);
  return (
    <div className=' space-y-6 md:space-y-2 '>
      <h2 className='w-56 cursor-pointer text-md text-[#e5e5e5]  transition duration-200 hover:text-white md:text-2xl'>
        {title}
      </h2>
      <div className='group relative md:ml-2'>
        <BiChevronLeft className='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100' />
        <div className='flex items-center space-x-0.5  scrollbar-hide overflow-x-scroll md:space-x-2.5 md:p-2'>
          {movies.results?.map((movie, index) => (
            <Thumbnail movie={movie} key={index} />
          ))}
        </div>

        <BiChevronRight className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100' />
      </div>
    </div>
  );
};

export default MovieCollection;
