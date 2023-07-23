import { useState } from 'react';
import { youtubeUrl } from '../../../utils/constant';
import MovieDetails from '../movie-details';

//==================================
const SelectedMovie = ({ movie }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const trailerIndex = movie.videos.results.findIndex(
    (v) => v.type === 'Triler'
  );

  const trailerURL = `${youtubeUrl}${movie[trailerIndex]?.key}`;
  return (
    <>
      <MovieDetails
        movie={movie}
        setShowPlayer={setShowPlayer}
        showPlayer={showPlayer}
        trailerURL={trailerURL}
      />
    </>
  );
};

export default SelectedMovie;
