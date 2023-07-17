import axios from 'axios';
import { urls } from './urls';
const api_key = process.env.NEXT_PUBLIC_API_KEY;
//==========================================
axios.defaults.params = {
  api_key,
};
//==========================================
export const getMoviePosters = async () => {
  const { data } = await axios.get(urls.movePoster);
  return data;
};

export const getTrendig = async () => {
  const { data } = await axios.get(urls.treandig);
  return data;
};

export const getTopRate = async () => {
  const { data } = await axios.get(urls.topRate);
  return data;
};

export const getComedyMovie = async () => {
  const { data } = await axios.get(urls.comedyMovie);
  return data;
};

export const getActionMovie = async () => {
  const { data } = await axios.get(urls.actionMovie);
  return data;
};

export const getHorrorMovie = async () => {
  const { data } = await axios.get(urls.horrorMovie);
  return data;
};

export const getRomanceMovie = async () => {
  const { data } = await axios.get(urls.romanceMovie);
  return data;
};

export const getDocumentariesMovie = async () => {
  const { data } = await axios.get(urls.documentariesMovie);
  return data;
};
