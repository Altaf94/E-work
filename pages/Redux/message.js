import {createSlice} from '@reduxjs/toolkit';

const MessageSlice = createSlice({
  name: 'MessageReducer',
  initialState: {
    message: '',
  },

  reducers: {
    Getmessage(state, action) {
      console.log(action)
     
      
      
    },
  },
});

export const {Getmessage} = MessageSlice.actions;
export default MessageSlice.reducer;
