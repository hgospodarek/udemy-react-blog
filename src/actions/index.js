import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
  // Example of bad approach
  // we are not actually returning a JS object here once this gets transpiled  due to async await
  const reponse = await jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response,
  };
};
