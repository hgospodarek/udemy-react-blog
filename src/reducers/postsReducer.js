export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state; // this is where we will go if we don't recognize the action type
  }
};
