import { createSlice } from "@reduxjs/toolkit";

const BookingdetailSlice = createSlice(
    {
        name:"Bookingdetailreducer",
        initialState: {
            mycart: [],
          },
       

        reducers:{
            Bookingdetailadd(state, action) {
                const index = state.mycart?.findIndex((item) => item.uid === action.payload.uid);
                if (index != -1) {
                  state.mycart[index].quantity += 1;
                } else {
                  const newItem = {...action.payload, quantity: 1};
                  state.mycart.push(newItem); 
                } 
              },
            RemoveAll(state) {
                return (state = []);
            },
            
              Removeitem(state, action) {
                return state.mycart?.filter(product => product.uid !== action.payload);
            },
            Decrement(state, action){
                const index = state.mycart?.findIndex((item) => item.uid === action.payload.uid);
                if(state.mycart[index].quantity > 1) {
                    state.mycart[index].quantity -=1
                }

            }

           
        }
    }
)

export const {Bookingdetailadd, RemoveAll, Removeitem, Decrement} = BookingdetailSlice.actions
export default BookingdetailSlice.reducer
