import { getData } from "./action.creator";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  allEvents: [],
  selectedEvents: [],
  error: "",
};

const masterSlice = createSlice({
  name: "master",
  initialState,
  reducers: {
    selectEvent: (state, action) => {
      state.selectedEvents.push(action.payload)
      state.allEvents = state.allEvents.filter(sportEvent => sportEvent.id!==action.payload.id)
    },
    unselectEvent: (state,action) => {
      state.selectedEvents = state.selectedEvents.filter(sportEvent => sportEvent.id!==action.payload.id)
      state.allEvents.unshift(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allEvents = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { selectEvent, unselectEvent } = masterSlice.actions;
export default masterSlice.reducer;
