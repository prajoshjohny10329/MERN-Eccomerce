import { createAsyncThunk, createSlice }  from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null

}

const userSignup = createAsyncThunk('/auth/sign-up', 
    async(FormData) =>{
        console.log('async thunk called');
        
        const response = await axios.post(
            'http://localhost:5000/api/auth/signup', 
            FormData, 
            {
                withCredentials: true,
            }
        );

        return response.data
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser: (state,action) =>{

        }
    },
    extraReducers: (builder) =>{
        builder.addCase(userSignup.pending, (state) =>{
            state.isLoading = true
        }).addCase(userSignup.fulfilled, (state) =>{
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = false;

        }).addCase(userSignup.rejected, (state) =>{
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;

        })
    }
})

export const {setUser} =authSlice.actions
export default authSlice.reducer;