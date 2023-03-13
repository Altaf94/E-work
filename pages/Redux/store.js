import {configureStore} from '@reduxjs/toolkit';
import TokenSlice from './loginreducer';
import UidSlice from './Uid';
import ProductSlice from './product';
import StyleridSlice from './stylerid';
import DesignerdetailSlice from './message';
import BookingdetailSlice from './bookingdetail';
import MessageSlice from './message'
import PaymentUriSlice from './paymenturi'
import Offerslice from './offerredirect'

const Store = configureStore({
  reducer: {
    TokenReducer: TokenSlice,
    UidReducer: UidSlice,
    ProductReducer: ProductSlice,
    styleridReducer: StyleridSlice,
    Bookingdetailreducer: BookingdetailSlice,
    DesignerdetailReducer: DesignerdetailSlice,
    MessageReducer:MessageSlice,
    PaymentUriReducer:PaymentUriSlice,
    OfferuidReducer:Offerslice

  },
});

export default Store;
