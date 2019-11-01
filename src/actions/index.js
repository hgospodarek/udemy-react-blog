import _ from 'lodash'; // by convention we import lodash as underscore
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  
  // note the backticks shit is ES2015 syntax

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
