import { createSlice } from "@reduxjs/toolkit";

const Offerslice = createSlice(
  {
        name:'OfferuidReducer',
        initialState:{
            images:"",
            saloonname:"",
            address:"",
            offeruid:"", 
        },
     
 reducers:{
    Getofferuid(state,action){{
        state.images=action.payload.saloon_image
        state.saloonname=action.payload.saloon_name
        state.address=action.payload.address
        state.uid=action.payload.uid
    
    
  }},

     
}}
)

export const { Getofferuid } = Offerslice.actions 
export default Offerslice.reducer;