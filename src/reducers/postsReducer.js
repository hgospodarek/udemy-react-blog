export default (state = [], action) => {
  if (action.type === 'FETCH_POSTS') {
    return action.payload;
  }

  return state; // this is where we will go if we don't recognize the action type
};
