import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { RootState } from "../store";

interface BookingItem {
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  endTime: string;
  startTime: string;
  manufacturingYear: string;
  servicePrice: number;
  serviceId: string;
  slotId: string;
}

interface BookingState {
  item: BookingItem | null;
}

const initialState: BookingState = {
  item: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addToBooking(state, action: PayloadAction<BookingItem>) {
      if (state.item && state.item.slotId === action.payload.slotId) {
        toast.error("Service already booked for this slot. Try again later!");
        return;
      }
      state.item = action.payload;
    },
    removeFromBooking(state) {
      state.item = null;
    },
    clearBooking(state) {
      state.item = null;
    },
  },
});

export const { addToBooking, removeFromBooking, clearBooking } =
  bookingSlice.actions;

export default bookingSlice.reducer;

export const currentBookings = (state: RootState) => state.booking.item;
