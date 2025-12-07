import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { BrowserRouter,Link,Routes,Route,useParams,useNavigate } from "react-router-dom";
import { ajou, mod, sup } from "./TSlice";

export function GestionChambre(){
    const nav=useNavigate()
    const l =useSelector(s=>s.list)
    const dispatch=useDispatch()
    const {d}=useParams();
    const o=(d=="ajouter")?{
    code: "CH" +(Math.max(...l.map(x=>parseInt(x.code.replace("CH",""))+1))),
    nombreLits:"",
    surface:"",
    etage:"",
    description:""
    }:(l.find(x=>x.code==d))
const[ob,setob]=useState(o)
 const[c,setc]=useState(ob.code)
    const[n,setn]=useState(ob.nombreLits)
    const[s,sets]=useState(ob.surface)
    const[r,setr]=useState(ob.etage)
    const[de,setde]=useState(ob.description)
const button=(d=="ajouter")?(
    <button
    className="button-blue"
    onClick={()=>{
        console.log({n,r,s,de});
        const m=[];
        if (n === undefined || n === null || n === "") m.push("nombreLits");
        if (r === undefined || r === null || r === "") m.push("etage");
        if (s === undefined || s === null || s === "") m.push("surface");
        if (de === undefined || de === null || de === "") m.push("description");
        if(m.length==0){
            dispatch(ajou({
                code:c,
                nombreLits:n,
                surface:s,
                etage:r,
                description:de
            }));
            nav("/");
        }else{window.alert("il faut entrer :"+m.join(" , "))}
    }}>Ajouter</button>
):(<span>
    <button
    className="button-sfar"
    onClick={()=>{
        const m=[];
        if (n === undefined || n === null || n === "") m.push("nombreLits");
        if (r === undefined || r === null || r === "") m.push("etage");
        if (s === undefined || s === null || s === "") m.push("surface");
        if (de === undefined || de === null || de === "") m.push("description");
        if(m.length==0){
            dispatch(mod({
                code:c,
                nombreLits:n,
                surface:s,
                etage:r,
                description:de
            }));
            nav("/");
        } else {window.alert("il faut entrer :"+m.join(" , "))}
    }}>Modifier</button>
    <button className="button-Rouge"
    onClick={()=>{dispatch(sup(c));
        nav("/")
    }}>Supprimer</button>
</span>)
   
function reni(){
    setn("")
    sets("")
    setr("")
    setde("")
}
    return<div>
        <h1>Gestion des chambre :</h1>
        <p>Code :</p>
        <input type="text" value={c} onChange={(e)=>setc(e.target.value)} className="input-ajo"  disabled/>
        <p>Nombre de lists :</p>
        <input type="text" value={n} onChange={(e)=>setn(e.target.value)} className="input-ajo"  placeholder="entrer le Nombre de lists"/>
        <p>Étage :</p>
        <input type="radio" name="a" onChange={()=>setr("1")} checked={r=="1"}/>etage 1
        <input type="radio" name="a" onChange={()=>setr("2")} checked={r=="2"}/>etage 2
        <input type="radio" name="a" onChange={()=>setr("3")} checked={r=="3"}/>etage 3

        
        <p>surface :</p>
        <input type="text" value={s} onChange={(e)=>sets(e.target.value)} className="input-ajo"  placeholder="entrer le surface"/>
        <p>Description :</p>
<textarea className="input-ajo" value={de} onChange={(e)=>setde(e.target.value)} placeholder="enter description"></textarea> 
<br/>       <br/>       <br/>       
<div>
    {button}
    <button className="button-gris" onClick={reni}>Rénitialiser</button>
</div>
    </div>

}






