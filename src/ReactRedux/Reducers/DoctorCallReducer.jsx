const intial={
    doctor:[],
    specificDoc:[]
}
export  function getAllDoctor(state=intial,action)
{
    switch(action.type) {
                case 'getDoctor': 
                return {
                    ...state,
                    doctor: action.payload
                };
                case 'FilterDoctors': 
                return {
                    ...state,
                    doctor: [...state.doctor,action.payload]
                };

                case "CLEAR_Doctor":
                return {
                    ...state,
                    doctor:[]
                }

                case 'getSpecificDoctor': 
                return {
                    ...state,
                    specificDoc: action.payload
                    // state.specificDoc.filter((doc)=>doc.Name==action.payload.Name)
                };
                default: 
            return state;
    }
}
