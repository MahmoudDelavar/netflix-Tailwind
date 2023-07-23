import Hero from './hero';
import MovieCollection from './movie-collection';

const LandingPage = ({
  posters,
  trends,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovie,
  documentaries,
}) => {
  return (
    <>
      <Hero moviePosters={posters} />

      <section className='container pb-32'>
        <MovieCollection title='Trending Now' movies={trends} />
        <MovieCollection title='Top Rated' movies={topRated} />
        <MovieCollection title='Action Thrillers' movies={actionMovies} />
        <MovieCollection title='Comedies' movies={comedyMovies} />
        <MovieCollection title='Scary Movies' movies={horrorMovies} />
        <MovieCollection title='Romance Movies' movies={romanceMovie} />
        <MovieCollection title='Documentaries' movies={documentaries} />
      </section>
    </>
  );
};

export default LandingPage;
