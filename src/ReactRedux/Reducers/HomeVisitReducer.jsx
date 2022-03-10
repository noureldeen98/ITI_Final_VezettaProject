const InitialState = {
    data: []
}

export function bookAppointmentReducer (state=InitialState, action) {
    switch(action.type) {
        case 'bookAppointement': 
            return {
                ...state,
                data: action.payload
            };
        default: 
            return state;
    }
}