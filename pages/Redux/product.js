import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice(
  {
        name:'ProductReducer',
        initialState:{
          images:"",
          saloonname:"",
          address:"",
          uid:"", 
        },
     
 reducers:{
    Getproduct(state,action){{
    state.images=action.payload.saloon_image
    state.saloonname=action.payload.saloon_name
    state.address=action.payload.address
    state.uid=action.payload.uid

  }},

     
}}
)

export const { Getproduct } = ProductSlice.actions 
export default ProductSlice.reducer;