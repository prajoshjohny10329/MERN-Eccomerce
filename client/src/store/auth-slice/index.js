import { createAsyncThunk, createSlice }  from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null

}

export const userSignupThunk = createAsyncThunk('/auth/sign-up', 
    async(formData) =>{
        console.log('async thunk called');
        
        const response = await axios.post(
            'http://localhost:5000/api/auth/signup', 
            formData, 
            {
                withCredentials: true,
            }
        );

        return response.data
    }
)

export const userLoginThunk = createAsyncThunk('/auth/login',
    async(formData) =>{
        console.log('login thunk called');
        console.log(formData);
        
        const response = await axios.post('http://localhost:5000/api/auth/login',
            formData,
            {
                withCredentials: true,
            }
        )
        console.log('before');
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
        builder
        .addCase(userSignupThunk.pending, (state) =>{
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
        //for login
        .addCase(userLoginThunk.pending, (state) =>{
            console.log('userLoginThunk pending');
            
            state.isLoading = true
        }).addCase(userLoginThunk.fulfilled, (state, action) =>{
            console.log('userLoginThunk fulfilled');

            
            state.isLoading = false;
            state.user = action.payload.user ?  action.payload.user : null ;
            state.isAuthenticated = action.payload.success;

        }).addCase(userLoginThunk.rejected, (state) =>{
            console.log('userLoginThunk rejected');
            
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;

        })
    }
})

export const {setUser} =authSlice.actions
export default authSlice.reducer;