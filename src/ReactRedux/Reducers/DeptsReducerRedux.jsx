const Val = {
    depts: [
        {name: "جلدية", common: true, book: true, modal: true},
        {name: "اسنان", common: true, book: true, modal: true},
        {name: "نفسي", common: true, book: true, modal: true},
        {name: "اطفال وحديثي الولادة", common: true, book: true, modal: true, form: true},
        {name: "مخ واعصاب", common: true, book: true, modal: true, form: true},
        {name: "عظام", common: true, book: true, modal: true, form: true},
        {name: "نساء وتوليد", common: true, book: true},
        {name: "انف واذن وحنجرة", common: true, book: true, modal: true},
        {name: "قلب واوعية دموية", common: true, book: true, modal: true, form: true},
        {name: "جراحه عامة", common: true, modal: true, form: true},
        {name: "جراحة عمود فقري", common: true},
        {name: "جراحه قلب وصدر", common: true},
        {name: "جراحه مخ واعصاب", common: true},
        {name: "جهاز هضمى ومناظير", common: true},
        {name: "حساسية ومناعة", common: true},
        {name: "حقن مجهري واطفال انابيب", common: true},
        {name: " روماتيزم", common: true},
        {name: " كبد", common: true},
        {name: "  كلي", common: true},
        {name: " مراكز اشعه", common: true},
        {name: " مسالك بولية", common: true, modal: true},
        {name: " عرض المزيد ", book: true, form: true},
    // الجزؤ التانى
        {name: "امراض دم", other: true},
        {name: "اورام", other: true},
        {name: "باطنة", other: true, modal: true, form: true},
        {name: " تخسيس وتغذية", other: true},
        {name: " جراحه اطفال", other: true},
        {name: "جراحه اورام", other: true},
        {name: "جراحه اوعية دموية", other: true, modal: true},
        {name: "جراحه تجميل", other: true},
        {name: "جراحه سمنه ومناظير", other: true},
        {name: "سكر وغدد صماء", other: true},
        {name: "سمعيات", other: true},
        {name: "صدر وجهاز تنفسي", other: true, modal: true, form: true},
        {name: "طب الاسرة", other: true},
        {name: "طب المسنين", other: true},
        {name: "طب تقويمى", other: true},
        {name: "علاج الالام", other: true},
        {name: "علاج طبيعي واصابات ملاعب", other: true, modal: true, form: true},
        {name: "عيون", other: true},
        {name: "معامل تحاليل", other: true},
        {name: "نطق وتخاطب", other: true},
    ]
}

export function allDeptsReducer (state=Val, action) {
    switch(action.type) {
        case 'getDepts': 
            return [].push(state.depts); 
        default: 
            return state;
    }
}

export function commonDeptsReducer (state = [], action) {
    switch(action.type) {
        case 'getCommonDepts': 
            return action.payload; 
        default: 
            return state;
    }
}

export function otherDeptsReducer (state = [], action) {
    switch(action.type) {
        case 'getOtherDepts': 
            return action.payload; 
        default: 
            return state;
    }
}