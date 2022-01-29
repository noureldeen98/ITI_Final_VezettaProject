const Val = {
    areas: [
        {name: "مصر الجديدة ", common: true},
        {name: "مدينة نصر", common: true},
        {name: "المعادي", common: true},
        {name: "التجمع", common: true},
        {name: " حدائق القبة", common: true},
        {name: "مدينة العبور", common: true},
        {name: "المنيل", common: true},
        {name: "شبرا", common: true},
        {name: "وسط البلد", common: true},
        // مناطق تانية
        {name: "كل المناطق", other: true},
        {name: "مدينة السلام", other: true},
        {name: "الرحاب", other: true},
        {name: "الزمالك", other: true},
        {name: "الزيتون", other: true},
        {name: "السيدة زينب", other: true},
        {name: "الشروق", other: true},
        {name: "العاشر من رمضان", other: true},
        {name: " العباسية", other: true},
    ]
}

export function allAreasReducer (state=Val, action) {
    switch(action.type) {
        case 'getAreas': 
            return [].push(state.areas); 
        default: 
            return state;
    }
}