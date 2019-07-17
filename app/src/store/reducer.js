const initState = {
  launches: []
}

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOAD_LAUNCHES_ASYNC':
      return {
        ...state,
        launches: action.payload
      }
    default:
      return state
  }
}

export default Reducer
