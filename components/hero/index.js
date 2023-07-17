import { useEffect, useState, version } from 'react';
import MovieDetails from '../movie-details';

//==============================================
const Hero = ({ moviePosters }) => {
  const [movie, setMovie] = useState();
  //   console.log('moviePosters', moviePosters);

  useEffect(() => {
    const rondom_index = Math.floor(
      Math.random() * moviePosters.results.length
    );

    setMovie(moviePosters.results[rondom_index]);
  }, [moviePosters]);

  return (
    <>
      <MovieDetails movie={movie} />
    </>
  );
};

export default Hero;
