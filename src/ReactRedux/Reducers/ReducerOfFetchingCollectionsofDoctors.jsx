function doctorCollectionReducer (state = [], action) {
    switch(action.type) {
        case 'Fetch': 
            return action.payload;
            
        default: 
            return state;
    }
}

export default doctorCollectionReducer;