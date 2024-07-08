import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from '../../api'

var category = "All";
export const getPopularVideo = createAsyncThunk(
    "popularVideo",
    async (keyword, { getState })=> {
        const state = getState();
        
        try {
            console.log("getPopularVideo wala function");
            const response = await request.get("/videos",{
                params: {
                    part: "snippet,contentDetails,statistics",
                    chart: "mostPopular",
                    regionCode: "IN",
                    maxResults: 20,
                    pageToken: state.video.nextPageToken,
                },
            });
            category = "All";
            console.log(response);
            return response;

        } catch(error){
            console.log(error);
        }
    }
);

export const getsearchVideo = createAsyncThunk(
    "searchvideo",
    async (keyword,{ getState }) => {
        const state=getState();
        try{
            const response = await request.get("/search",{
                params: {
                    part: "snippet",
                    q: keyword,
                    type: "video",
                    maxResults: 20,
                    pageToken: state.video.nextPageToken,
                },
            });
            category = keyword;
            console.log(response);

            return response;
        } catch(error){
            console.log(error);
        }
    }
);



export const videoSlice = createSlice({
    name: "video",
    initialState: {
        videos: [],
        nextPageToken: null,
        loading: false,
        category: "All",
    },
    extraReducers: (builder) =>{
        builder.addCase(getPopularVideo.fulfilled, (state,action)=>{
            const _videos = action.payload.data.items;
            state.videos = state.category === category? [...state.videos, ..._videos] : _videos;
            state.nextPageToken = action.payload.data.nextPageToken;
            state.loading = false;
            state.category = category;
        });

        builder.addCase (getPopularVideo.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(getPopularVideo.rejected, (state) =>{
            state.loading=false;
        });
    },
});

export default videoSlice.reducer;
