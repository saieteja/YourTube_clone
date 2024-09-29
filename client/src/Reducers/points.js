const pointsreducer =(state={data:null},action)=>{
    switch(action.type){
        case "ADDED_TO_POINTS":
            return{...state,data:action?.data}
        case "GET_POINTS":
            return{...state,data:action?.payload}
        default:
            return state;
    }
}

export default pointsreducer