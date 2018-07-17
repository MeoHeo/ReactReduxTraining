const initialState = { 
    todos: [{id:123, text:'hello', completed: false}] 
  };
  
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return {
                ...state,
                result: action.payload
            }
        default:
            return state
    }
}