import { fetchBaseUrl } from '../constant';

export const urls = {
  treandig: fetchBaseUrl + '/trending/all/week',
  movePoster: fetchBaseUrl + `/discover/movie`,
  topRate: fetchBaseUrl + '/movie/top_rated',
  actionMovie: fetchBaseUrl + '/discover/movie?with_genres=28',
  comedyMovie: fetchBaseUrl + '/discover/movie?with_genres=35',
  horrorMovie: fetchBaseUrl + '/discover/movie?with_genres=27',
  romanceMovie: fetchBaseUrl + '/discover/movie?with_genres=10479',
  documentariesMovie: fetchBaseUrl + '/discover/movie?with_genres=99',
};
