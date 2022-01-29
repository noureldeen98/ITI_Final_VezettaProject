
function deptsReducer (state = [], action) {
    switch(action.type) {
        case 'get-departments': 
            return action.payload; 
        default: 
            return state;
    }
}

export default deptsReducer;