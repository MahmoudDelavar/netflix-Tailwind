import { baseUrl } from '../constant';

export const urls = {
  treandig: baseUrl + '/trending/all/week',
  movePoster: baseUrl + `/discover/movie`,
  topRate: baseUrl + '/movie/top_rated',
  actionMovie: baseUrl + '/discover/movie?with_genres=28',
  comedyMovie: baseUrl + '/discover/movie?with_genres=35',
  horrorMovie: baseUrl + '/discover/movie?with_genres=27',
  romanceMovie: baseUrl + '/discover/movie?with_genres=10479',
  documentariesMovie: baseUrl + '/discover/movie?with_genres=99',
  trailer: (movie_id) => baseUrl + `/movie/${movie_id}`,
};
