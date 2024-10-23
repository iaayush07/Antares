// src/features/workItemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teamWorkItems: [],  // You can populate this with mock data from the images
  myWorkItems: [],
  capacityData: {},
};

const workItemsSlice = createSlice({
  name: 'workItems',
  initialState,
  reducers: {
    setTeamWorkItems: (state, action) => {
      state.teamWorkItems = action.payload;
    },
    setMyWorkItems: (state, action) => {
      state.myWorkItems = action.payload;
    },
    setCapacityData: (state, action) => {
      state.capacityData = action.payload;
    },
  },
});

export const { setTeamWorkItems, setMyWorkItems, setCapacityData } = workItemsSlice.actions;
export default workItemsSlice.reducer;
