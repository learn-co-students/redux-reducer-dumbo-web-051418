export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      // I used 'var', screw you ES6. @matt-mcalister.
      var newArray = [...state.friends, action.friend];
      return {...state, friends: newArray};
    case "REMOVE_FRIEND":
      var newArray = state.friends.filter(friend => friend.id !== action.id);
      return {...state, friends: newArray};
    default:
       return state;
  }
}
