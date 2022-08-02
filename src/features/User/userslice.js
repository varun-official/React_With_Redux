const createSlice  = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
    loading:false,
    data:[],
    error:''
}

//Generate pending,fulfilled,rejected
const featchUser = createAsyncThunk('user/featchUser',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users').then((users)=>users.data.map((user)=>user.username))
})

const userslice = createSlice({
    name:"user",
    initialState,
    extraReducers:(bulider)=>{
        bulider.addCase(featchUser.pending,(state,action)=>{
            state.loading=true
        })
        bulider.addCase(featchUser.fulfilled,(state,action)=>{
            state.loading=false
            state.data.push(action.payload)
            state.error=""
        })

        bulider.addCase(featchUser.rejected,(state,action)=>{
            state.error=action.error.message
        })
    }
})

module.exports = userslice.reducer
module.exports.featchUser = featchUser
