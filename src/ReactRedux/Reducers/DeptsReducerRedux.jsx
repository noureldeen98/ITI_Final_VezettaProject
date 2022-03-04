

const InitialState = {
    dpts: [],
    commonDpts: [],
    otherDpts: [],
}

export function allDeptsReducer (state=InitialState, action) {
    switch(action.type) {
        case 'getDepts': 
            return {
                ...state,
                dpts: action.payload
            };
        case 'getCommonDpts':
            return {
                ...state,
                commonDpts: action.payload
            }
        case 'getOtherDpts':
            return {
                ...state,
                otherDpts: action.payload
            }
        default: 
            return state;
    }
}
