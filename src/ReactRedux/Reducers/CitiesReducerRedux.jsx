
const InitialState = {
    cities: [],
    commonCities: [],
    otherCities: [],
    areas: []
}

export function allCitiesReducer (state=InitialState, action) {
    switch(action.type) {
        case 'getCities': 
            return {
                ...state,
                cities: action.payload
            };
        case 'getCommonCities':
            return {
                ...state,
                commonCities: action.payload
            }
        case 'getOtherCities':
            return {
                ...state,
                otherCities: action.payload
            }
        case 'getAreas': {
            return {
                ...state,
                areas: action.payload
            }
        }
        default: 
            return state;
    }
}