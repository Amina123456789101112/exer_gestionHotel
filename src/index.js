import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { HashRouter,Link,Routes,Route,useParams,useNavigate } from "react-router-dom";
import { chambres } from "./data";
import { st } from "./TSlice";
import { RechercheChambre } from "./RechercheChambre";
import { ConsultationChambre } from "./ConsultationChambre";
import { GestionChambre } from "./GestionChambre";

function App(){
    const a ="ajouter"
    return <div>
        <p style={{
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
  margin: "20px 0",
  backgroundColor: "black"
}}>
  <Link to="/" style={{
    backgroundColor: "#2d3239",
    color: "white",
    padding: "8px 12px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    minWidth: "140px",
    textAlign: "center"
  }}>Consulter les chambres</Link>

  <Link to={`/gestion/ajouter`} style={{
    backgroundColor: "#2d3239",
    color: "white",
    padding: "8px 12px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    minWidth: "140px",
    textAlign: "center"
  }}>Gestion des chambres</Link>
</p>

        <Routes>
            <Route path="/" element={<div><RechercheChambre/><ConsultationChambre/></div>}></Route>
            <Route path="/gestion/:d" element={<GestionChambre/>}></Route>
        </Routes>
        <div style={{
  textAlign: "center",
  backgroundColor: "aqua",
  padding: "10px",
  marginTop: "150px"
}}>
  @crée par Amina Tourrisse
</div>

</div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HashRouter><Provider store={st}><App/></Provider></HashRouter>) 












