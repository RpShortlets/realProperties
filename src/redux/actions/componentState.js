import { createSlice } from "@reduxjs/toolkit";

export const ComponentState = createSlice({
  name: "componentState",
  initialState: {
    adultcount: 0,
    childrencount: 0,
    guest: 0,
    textTitle: "Find Shortlets",
    unformattedDates: [],
    checkInDate: null,
    checkOutDate: null,
    useCheckInDate: null,
    useCheckOutDate: null,
    searchValue: "",
    checkScroll: false,
    openDrawer: false,
    showMobileReserveButton: false,
    showMobileReserveModal: false,
    listDates: true,
    paystackRequest: false,
    showDirections: false,
  },
  reducers: {
    incrementAdult: (state) => {
      state.adultcount++;
    },
    decrementAdult: (state) => {
      state.adultcount--;
    },
    incrementChildren: (state) => {
      state.childrencount++;
    },
    decrementChildren: (state) => {
      state.childrencount--;
    },
    totalGuest: (state) => {
      state.guest = state.adultcount;
    },
    resetCounts: (state) => {
      state.adultcount = 0;
      state.childrencount = 0;
    },
    DefaultText: (state) => {
      state.textTitle = "Find Shortlets";
    },
    changeText: (state) => {
      state.textTitle = "Search";
      console.log("Enter");
    },
    checkInDate: (state, action) => {
      state.checkInDate = action.payload;
    },
    checkOutDate: (state, action) => {
      state.checkOutDate = action.payload;
    },
    newCheckInDate: (state, action) => {
      state.useCheckInDate = action.payload;
    },
    newCheckOutDate: (state, action) => {
      state.useCheckOutDate = action.payload;
    },
    saveSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    newUnformattedDates: (state, action) => {
      state.unformattedDates = action.payload;
    },
    checkScrollState: (state, action) => {
      state.checkScroll = action.payload;
    },
    setOpenDrawer: (state, action) => {
      state.openDrawer = action.payload;
    },
    setShowMobileReserve: (state, action) => {
      state.showMobileReserveButton = action.payload;
    },
    setShowMobileReserveModal: (state, action) => {
      state.showMobileReserveModal = action.payload;
    },
    setListDates: (state, action) => {
      state.listDates = action.payload;
    },
    setPaystackRequest: (state, action) => {
      state.paystackRequest = action.payload;
    },
    setShowDirections: (state, action) => {
      state.showDirections = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  setShowDirections,
  checkScrollState,
  setListDates,
  setOpenDrawer,
  setPaystackRequest,
  setShowMobileReserve,
  setShowMobileReserveModal,
  newUnformattedDates,
  saveSearchValue,
  incrementAdult,
  decrementAdult,
  incrementChildren,
  decrementChildren,
  totalGuest,
  resetCounts,
  changeText,
  DefaultText,
  checkInDate,
  checkOutDate,
  newCheckInDate,
  newCheckOutDate,
} = ComponentState.actions;

export default ComponentState.reducer;
