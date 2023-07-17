import { useEffect, useState, version } from 'react';
import MovieDetails from '../movie-details';
import { getTrailer } from '../../utils/requests/fetchers';

//==============================================
const Hero = ({ moviePosters }) => {
  const [movie, setMovie] = useState();
  const [TrailerUrl, setTrailerUrl] = useState('');
  const [showPlayer, setShowPlayer] = useState();
  //   console.log('moviePosters', moviePosters);

  useEffect(() => {
    // choose a randome movie to show on the home page
    const rondom_index = Math.floor(
      Math.random() * moviePosters.results.length
    );
    setMovie(moviePosters.results[rondom_index]);

    // generate trailer url
    (async () => {
      const results = await getTrailer(moviePosters.results[rondom_index].id);
      const trailerIndex = results.findIndex(
        (element) => element.type === 'Trailer'
      );
      const trailerURL = `https://www.youtube.com/watch?v=${results[trailerIndex]?.key}`;
      setTrailerUrl(trailerURL);
      console.log('trailerURL', trailerURL);
    })();
  }, [moviePosters]);

  return (
    <>
      <MovieDetails
        movie={movie}
        showPlayer={showPlayer}
        setShowPlayer={setShowPlayer}
        trailerURL={TrailerUrl}
      />
    </>
  );
};

export default Hero;
