import {createSlice, createAction} from "@reduxjs/toolkit";

export const initialState ={
    status:"",
    data:[]
}

const HomeSlice=createSlice({
    name:"Home",
    initialState,
    reducers:{
        getHomeRequest:(state)=>{
          state.status="GET_REQUEST"
        },
        getHomesuccess:(state,{payload})=>{
           state.data=payload
           state.status="GET_SUCCESS"
        },
        getHomeFailure:(state,{payload})=>{
        state.data=payload
        state.status="GET_FAILURE"
        }
    }
})

export const  {getHomeRequest,getHomesuccess,getHomeFailure}=HomeSlice.actions

export function FetchData(){
    return async  dispatch =>{
        dispatch(getHomeRequest())
        try{
           const response = await fetch(`http://starlord.hackerearth.com/TopRamen`
           )
           const data=await response.json()
           dispatch(getHomesuccess(data))
        }
      
        catch (error){
           console.log("error")
        }
    }
}
const home=HomeSlice.reducer
export default home;