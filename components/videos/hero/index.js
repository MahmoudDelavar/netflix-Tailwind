import { useEffect, useState, version } from 'react';
import MovieDetails from '../movie-details';
import { getTrailer } from '../../../utils/requests/fetchers';
import { youtubeUrl } from '../../../utils/constant';
//==============================================

const Hero = ({ moviePosters }) => {
  const [movie, setMovie] = useState();
  const [TrailerUrl, setTrailerUrl] = useState('');
  const [showPlayer, setShowPlayer] = useState();

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
      const trailerURL = `${youtubeUrl}${results[trailerIndex]?.key}`;
      setTrailerUrl(trailerURL);
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
