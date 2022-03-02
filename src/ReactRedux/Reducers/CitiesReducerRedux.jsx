// const Val = {
//     cities: [
//         {name: "كل المحافظات", common: true},
//         {name: "القاهرة", common: true},
//         {name: "الجيزة", common: true},
//         {name: "الاسكندرية", common: true},
//         {name: "الساحل الشمالي", common: true},
//         {name: "القليوبية", common: true},
//         {name: "الغربية", common: true},
//         {name: "المنوفية", common: true},
//         {name: "الفيوم", common: true},
//         // محافظات تانية
//         {name: "الدقهلية", other: true},
//         {name: "الشرقية", other: true},
//         {name: "البحيرة", other: true},
//         {name: "دمياط", other: true},
//         {name: "مطروح", other: true},
//         {name: "اسيوط", other: true},
//         {name: "الاسماعيلية", other: true},
//         {name: "الغردقة", other: true},
//         {name: "شرم الشيخ", other: true},
//     ]
// }

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