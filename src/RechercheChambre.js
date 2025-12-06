import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { rech } from "./TSlice";

export function RechercheChambre(){
    const etag=useSelector(s=>s.etag)
    const desc=useSelector(s=>s.description)
    const[e,sete]=useState(etag);
    const[d,setd]=useState(desc);
    const dispatch=useDispatch()
    return<div>
        <br/>
        <p className="p-rech">
            <input type="text" value={e} placeholder="Étage" className="input-rech" onChange={(e)=>sete(e.target.value)}/>
           <input type="text" value={d} placeholder="Description" className="input-rech" onChange={(e)=>setd(e.target.value)}/>
           <button className="button-blue" onClick={()=>dispatch(rech({eta:e,des:d}))}>Rechercher</button>
        </p>
    </div>



}