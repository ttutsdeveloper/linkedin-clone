import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, provider } from "../../firebase";

const initialState = {
    user: null,
    loading: false,
    error: false,
    success: false,
}


export  const signInWithGoogle = createAsyncThunk(
    'user/signInWithGoogle',
    async (thunkAPI) => {
        const authGoogle = auth.signInWithPopup(provider);
        return await authGoogle;
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signInWithGoogle.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.additionalUserInfo.profile
        })
    },
});

export default userSlice.reducer;