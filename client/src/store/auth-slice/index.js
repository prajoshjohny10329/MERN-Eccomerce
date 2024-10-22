import { createAsyncThunk, createSlice }  from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null

}

export const userSignupThunk = createAsyncThunk('/auth/sign-up', 
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
        builder.addCase(userSignupThunk.pending, (state) =>{
            console.log('pending');
            
            state.isLoading = true
        }).addCase(userSignupThunk.fulfilled, (state, action) =>{
            console.log('fulfilled');

            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = false;

        }).addCase(userSignupThunk.rejected, (state) =>{
            console.log('rejected');
            
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;

        })
    }
})

export const {setUser} =authSlice.actions
export default authSlice.reducer;