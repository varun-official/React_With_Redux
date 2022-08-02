// const createSlice  = require('@reduxjs/toolkit').createSlice
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    stock:100
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.stock-=action.payload.stock
        },
        restock:(state,action)=>{
            state.stock+=action.payload.stock
        }
    }
})

export default cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions

export const {ordered,restock} = cakeSlice.actions

