import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { sup } from "./TSlice"
import { BrowserRouter,Link,Routes,Route,useParams,useNavigate } from "react-router-dom";

export function ConsultationChambre(){
    const dispatch=useDispatch()
    const l=useSelector(s=>s.list)
    const e=useSelector(s=>s.etage)
    const d=useSelector(s=>s.description)
    const li=(e && d)?(l.filter(x=>x.etage==e && x.description.includes(d))):
    ((e)?(l.filter(x=>x.etage==e)):
((d)?(l.filter(x=>x.description.includes(d))):(l)))

    return<div>
        <h1>Consultation les chambres</h1>
        {(li.length!=0)?(<table border={1}>
<tr>
    <th>code</th>
    <th>nombreLits</th>
    <th>surface</th>
    <th>etage</th>
    <th>description</th>
    <th>Action</th>
</tr>
{li.map((x,i)=><tr key={i}>
    <td>{x.code}</td>
    <td>{x.nombreLits}</td>
    <td>{x.surface}</td>
    <td>{x.etage}</td>
    <td>{x.description}</td>
    <td>
        <button className="button-sfar"><Link to={`/gestion/${x.code}`} style={{textDecoration:"none"}}>Modifier</Link></button>
        <button className="button-Rouge"
        onClick={()=>dispatch(sup(x.code))}>Suprimer</button>
    </td>
</tr>)}
  </table>
        ):((e && d)?(<p>il n'a pas chambre par etage :{e} et discription :{d}</p>):
    ((e)?(<p>il n'a pas chambre par etage :{e}</p>):
((d)?(<p>il n'a pas chambre par discription :{d}</p>):(<p></p>))))}
        
    </div>
}