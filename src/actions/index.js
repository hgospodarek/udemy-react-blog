import _ from 'lodash'; // by convention we import lodash as underscore
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => dispatch => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  // note the backticks shit is ES2015 syntax

  dispatch({ type: 'FETCH_USER', payload: response.data });
});

// underscore on _fetchUser indicates (to eng reading) that this is private func
