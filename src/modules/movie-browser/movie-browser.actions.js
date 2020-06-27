import {createAsyncActionCreator} from '../common/redux.helper';
import * as movieService from './movie-browser.service';

export const keys = {
  'GET_TOP_MOVIES': 'https://api.themoviedb.org/3/movie/top_rated?api_key=43ad85e69b4a1800caa6a194a067384f&language=en-US&page=1',
  'SEARCH_MOVIES': 'SEARCH_MOVIES',
  'GET_MOVIE_DETAILS': 'GET_MOVIE_DETAILS',
};

export const getTopMovies = (page) => createAsyncActionCreator(
  // actionType
  keys.GET_TOP_MOVIES,
  // requestFn
  movieService.getTopMovies, 
  // requestParams
  {page}
);

export const searchMovies = (query, page) => createAsyncActionCreator(
  keys.SEARCH_MOVIES,
  movieService.searchMovies, 
  {query, page}
);

export const getMovieDetails = (movieId) => createAsyncActionCreator(
  keys.GET_MOVIE_DETAILS,
  movieService.getMovieDetails, 
  {movieId}
);