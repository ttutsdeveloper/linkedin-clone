import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    feeds: [],
    loading: false,
    error: false,
    success: false,
};

export const fetchFeeds = createAsyncThunk('feeds/fetchFeeds', async() => {
    const response = await fetch('/json/feeds.json')
    return await response.json();
})

const feedSlice = createSlice({
    name: 'feeds',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
          .addCase(fetchFeeds.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(fetchFeeds.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.feeds = state.feeds.concat(action.payload)
          })
          .addCase(fetchFeeds.rejected, (state, action) => {
            state.success = false;
            state.error = action.error.message;
          })
    }
});

export default feedSlice.reducer;