let action = {
  type: "INCREASE"
}

export function managePresents(state, action){
  switch (action.type) {
    case "INCREASE":
        return {numberOfPresents: state.numberOfPresents + 1}
      break;
    default:
      return state

  }
}
