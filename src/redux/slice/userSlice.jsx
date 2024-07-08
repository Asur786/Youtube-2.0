import { createAsyncThunk,createSlice,current} from "@reduxjs/toolkit";
import {auth,provider} from "../../firebase";
import { signInWithPopup } from "firebase/auth";


export const loginuser = createAsyncThunk("loginuser",async()=>{
    try {
        const res = await signInWithPopup(auth,provider);
        sessionStorage.setItem("yt-access-token",res._tokenResponse.oauthAccessToken);
        const profile = {
            displayName: res.user.displayName,
            email: res.user.email,
            photoURL:res.user.photoURL
        }
        console.log(res);       //console pe is result ko kaise dekhe? Dekh liyee abb kyaa
        sessionStorage.setItem("yt-user",JSON.stringify(profile));
        return res;
    } catch (error) {
        console.log(err)
    }
})

export const logoutuser=()=> async(dispatch)=>{
    await auth.signOut();
    dispatch(logout());
    sessionStorage.removeItem("yt-access-token");
    sessionStorage.removeItem("yt-user");
}
export const userSlice = createSlice({
    name: "user",
    initialState:{
        user:sessionStorage.getItem("yt-user")? JSON.parse(sessionStorage.getItem("yt-user")): null,
        accessToken: sessionStorage.getItem("yt-access-token")?sessionStorage.getItem("yt-access-token"):null,
        loading: false
    },
    reducers:{
        login_request:(state)=>{
            state.loading=true
        },
        login_success:(state,action)=>{
            console.log("before", current(state));
            state.loading=false
            state.accessToken = action.payload
            console.log("after", current(state));
        },
        logout:(state)=>{
            state.accessToken = null;
            state.user = null
            state.loading=false
        },

    },
        //iske chlte pagal bane hue the. 
        // Login me createAsyncThunk use krte time fullfilled rejected and pending state ko handle krne ke liye extraReducers ka use krte hai
    extraReducers:(builder)=>{
        builder.addCase(loginuser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(loginuser.rejected, (state) => {
            state.loading = false
        })
        builder.addCase(loginuser.fulfilled, (state, action) => {
            state.loading = false
            state.accessToken = action.payload._tokenResponse.oauthAccessToken
            const profile ={
                displayName: action.payload.user.displayName,
                email: action.payload.user.email,
                photoURL: action.payload.user.photoURL
            }
            state.user = profile
        })
    },
})

export const {login_success,login_request ,logout} = userSlice.actions;

export default userSlice.reducer;
