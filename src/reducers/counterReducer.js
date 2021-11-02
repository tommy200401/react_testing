//Reducer: managing data by actions

const initState = { size:0, sum:0 }  //default value
const counterReducer = (state = initState, action) => {      // 2 parameters required
    switch(action.type) {
        case 'updateCounterSize':
            return {...state, size: action.payload}  // ... represent default value of state
        case 'updateCounterSum':
            return {...state, sum: state.sum + action.payload}
        case 'resetSum':
            return {...state, sum: 0}
        default: 
            return state
    }
}

export default counterReducer;