import { createSlice } from "@reduxjs/toolkit";

const PaymentUriSlice = createSlice(
  {
        name:'PaymentUriReducer',
        initialState:{
          PaymentUri:"",
          
        },

      
 reducers:{
    GetPaymentUri(state,action)
    {{
        state.token = action.payload;
     }},
 

   } 

    }
)

export const {GetPaymentUri} = PaymentUriSlice.actions 
export default PaymentUriSlice.reducer;