
// const initialState ={
//     dataOfCollection:[]
// }

// const ReducerOfFetchingCollections =(state=initialState.dataOfCollection , action)=>{
//     switch(action.type){
//         case "Fetch":
//             return{
//                 ...state,
//                 state: [...state,action.payload]
//             }
//     }
// }

// export default ReducerOfFetchingCollections;


function ReducerOfFetchingCollectionsofDoctors (state = [], action) {
    switch(action.type) {
        case 'Fetch': 
            return action.payload;
            
        default: 
            return state;
    }
}

export default ReducerOfFetchingCollectionsofDoctors;