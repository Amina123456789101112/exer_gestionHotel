import { configureStore, createSlice } from "@reduxjs/toolkit";
import { chambres } from "./data";

export const TSlice=createSlice({
    name:"gestionHotel",
    initialState:{list:chambres,etage:"",description:""},
    reducers:{
        rech:(state,action)=>{
            state.etage=action.payload.eta;
            state.description=action.payload.des;
        },
        ajou:(state,action)=>{
            state.list.push(action.payload);
            state.etage="";
            state.description="";
        },
        mod:(state,action)=>{
            state.list=state.list.map(x=>(x.code==action.payload.code)?(action.payload):x);
            state.etage="";
            state.description="";
        },
        sup:(state,action)=>{
            state.list=state.list.filter(x=>x.code!=action.payload);
            state.etage="";
            state.description="";
        }
    }
})
export const{rech,ajou,mod,sup}=TSlice.actions;
export const st = configureStore({reducer:TSlice.reducer})