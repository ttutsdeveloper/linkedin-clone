import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db, { storage } from "../../firebase";

const initialState = {
    feeds: [],
    loading: false,
    error: false,
    success: false,
};

const feeds = () => {
  return new Promise((resolve, reject) => {
    try {
      db.collection('feeds').onSnapshot(querySnapshot => { 
        const feeds = querySnapshot.docs.map(doc => doc.data());
        resolve(feeds);
      });
    } catch (error) {
      reject(error);
    }
  })
}

export const fetchFeeds = createAsyncThunk('feeds/fetchFeeds', async() => {
    return await feeds();
});


export const postFeed = createAsyncThunk('feeds/postFeed', async(payload) => {
  const upload = storage
    .ref(`images/${payload.image.name}`)
    .put(payload.image);
    // upload.on('state_changed', (snapshot) => {
    //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //   console.log (`Progress ${progress}`);
    // },error => {
    //   console.log(error);
    // }, async() => {
    //     const downloadUrl = await upload.snapshot.ref.getDownloadURL();
    //     db.collection('feeds').add({
    //       user: {
    //         name: payload.user.displayName,
    //         positon: ''
    //       },
    //       post: {
    //         postType: 'image',
    //           image: downloadUrl,
    //           description: payload.description
    //       },
    //       socialReactions: {
    //           likes: 0,
    //           comments: 0,
    //           repost: 0
    //     }
    //     });
    // })

    const downloadUrl = await upload.snapshot.ref.getDownloadURL();
    db.collection('feeds').add({
      user: {
        name: payload.name,
        positon: ''
      },
      post: {
        postType: payload.postType,
        image: downloadUrl,
        description: payload.description
      },
      socialReactions: {
          likes: 0,
          comments: 0,
          repost: 0
      }
    });
    return downloadUrl;
});


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
          .addCase(postFeed.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(postFeed.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
          })
          .addCase(postFeed.rejected, (state, action) => {
            state.success = false;
            state.error = action.error.message;
          })
    }
});

export default feedSlice.reducer;