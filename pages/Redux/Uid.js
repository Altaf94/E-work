import { createSlice } from "@reduxjs/toolkit";

const UidSlice = createSlice(
  {
        name:'UidReducer',
        initialState:{
          uid:'3a0e5575-ccb9-409f-b5ff-06840b9ba237',
          id:1,
        },
     
 reducers:{
    Getuid(state,action){{
    state.uid = action.payload.uid
    state.servicename = action.payload.service_name 
  }},
  Getid(state,action){
    state.id = action.payload 
    console.log(state.id)
  }
     
}}
)

export const { Getuid, Getid } = UidSlice.actions 
export default UidSlice.reducer;