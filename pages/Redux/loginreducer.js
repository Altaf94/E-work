import { createSlice } from "@reduxjs/toolkit";

const TokenSlice = createSlice(
  {
        name:'TokenReducer',
        initialState:{
          contact:"",
          firstname:"",
          lastname:"",
          email:"",
          token:"",
        },

      
 reducers:{
    add(state,action)
    {{
      state.contact =action.payload.customerdata.contact
      state.firstname =action.payload.customerdata.firstname
      state.lastname =action.payload.customerdata.lastname
      state.email =action.payload.customerdata.email
      state.token=action.payload.token
      console.log(action.payload)
     }},
  logout(state,action){
    state.token = null;
  },

   } 

    }
)

export const {add , logout} = TokenSlice.actions 
export default TokenSlice.reducer;