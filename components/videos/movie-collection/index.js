import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useRef } from 'react';
import Thumbnail from '../../common/thumbnail';
//============================================================
const MovieCollection = ({ title, movies }) => {
  const ref = useRef(null);

  // -----handle chlich arrow( left and right)-----
  const handleClick = (direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className='mt-6 md:mb-y-2'>
      {/*------------- row title------------- */}
      <h2 className='w-56 cursor-pointer text-md text-[#e5e5e5]  transition duration-200 hover:text-white md:text-2xl '>
        {title}
      </h2>

      {/*------------- arrow left------------- */}
      <div className='group relative md:ml-2'>
        <BiChevronLeft
          onClick={() => {
            handleClick('left');
          }}
          className='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
        />

        {/*----------- thumbnail list----------- */}
        <div
          ref={ref}
          className='flex items-center space-x-0.5   scrollbar-hide overflow-x-scroll md:space-x-2.5 md:p-2'
        >
          {movies.results?.map((movie, index) => (
            <Thumbnail movie={movie} key={index} />
          ))}
        </div>

        {/*------------- arrow right------------- */}
        <BiChevronRight
          onClick={() => {
            handleClick('right');
          }}
          className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
        />
      </div>
    </div>
  );
};

export default MovieCollection;
