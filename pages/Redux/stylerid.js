import {createSlice} from '@reduxjs/toolkit';


const StyleridSlice = createSlice({
  
  name: 'styleridReducer',
  initialState: {
    stylername: 'Any One',
    styleruid: 'f3f19693-0b26-4bd5-ac35-6cf7f03cdda2',
    stylerimage: 'superadmin/no-avatar_8X8WahT.webp',
    Saloonuid:"",

  },

  reducers: {
    Getstylerid(state, action) {
      {
       state.styleruid = action.payload.uid
       state.stylername = action.payload.employee_name
       state.stylerimage = action.payload.employee_image
       state.Saloonuid = action.payload.Saloon_uid
       
      }

    },
    Renamestyler(state,action){
      state.stylername = 'Any One'
      state.styleruid='f3f19693-0b26-4bd5-ac35-6cf7f03cdda2'
      state.stylerimage='superadmin/no-avatar_8X8WahT.webp'
      
    }
  },
});

export const {Getstylerid, Renamestyler, Getmessage} = StyleridSlice.actions;
export default StyleridSlice.reducer;
