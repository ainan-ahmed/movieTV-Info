import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./apiActions";

const slice = createSlice({
  name: "data",
  initialState: {
    result: [],
    query: "",
    type: null,
    loading: false,
    singleResult: []
  },
  reducers: {
      dataRequested: (state, action) => {
          state.loading = true;
      },
    dataRecieved: (state, action) => {
        state.result = action.payload;
        state.loading = false;
    },
    dataRequestFailed: (state, action) => {
      state.loading = false;
    },
    singleDataRecieved: (state, action) => {
      state.result = []
      state.singleResult = action.payload
      state.loading = false;
    }
  },
});

export const { dataRecieved, dataRequestFailed, dataRequested,singleDataRecieved } = slice.actions;
export default slice.reducer;

export const loadData = (query) => (dispatch, getState) => {
         dispatch(
           apiCallBegan({
             query,
             onStart: dataRequested.type,
             onSuccess: dataRecieved.type,
             onError: dataRequestFailed.type,
           })
         );
       };
export const getContent = (id) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
        id,
        onStart: dataRequested.type,
      onSuccess: singleDataRecieved.type,
      onError: dataRequestFailed.type,
    })
  );
};

