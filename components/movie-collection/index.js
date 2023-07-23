const MovieCollection = ({ title, movies }) => {
  return (
    <div className=' space-y-0.5 md:space-y-2 '>
      <h2 className='w-56 cursor-pointer text-md text-[#e5e5e5]  transition duration-200 hover:text-white md:text-2xl'>
        {title}
      </h2>
    </div>
  );
};

export default MovieCollection;
