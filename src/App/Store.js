const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/Cake/cakeSlice')
const reduxLogger = require('redux-logger')
const icecreamReducer = require('../features/IceCream/icecreamSlice')
const userReducer = require('../features/User/userslice')


const logger = reduxLogger.createLogger()


const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer
    },
    //by defult configureStore adds defaultMiddleware so new middleware should be concatinated
    middleware:(defaultMiddleware)=> defaultMiddleware().concat(logger)
})

module.exports = store