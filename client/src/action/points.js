import * as api from "../Api";

export const addpoints = (userId,pointsToAdd)=>async (dispatch)=>{
    try {
        const { data } = await api.addpoints(userId, pointsToAdd); 
    
        dispatch({ type: "ADDED_TO_POINTS",data });
        console.log(data)
        dispatch(getpoints(userId))
      } catch (error) {
        console.error("Error adding points:", error);
      }
}

export const getpoints = (userId)=>async (dispatch)=>{
  try {
    const data = await api.getpoints(userId)
    dispatch({type:"GET_POINTS",payload:data})
   getpoints(userId)
  } catch (error) {
    console.log(error)
  }
}