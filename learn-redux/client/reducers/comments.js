function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // need to return existing state and the comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      // we need to return the deleted comment
      console.log('removing comment')
      return [
        // from the state up to the one we want to delete
        ...state.slice(0, action.i),
        // update after deleted one to the end
        ...state.slice(action.i + 1)
      ]
    default: 
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      //take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  // console.log(state, action);
  // console.log('dispatch add comment')
  return state;
}

export default comments;
