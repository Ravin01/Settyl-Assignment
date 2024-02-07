import axios from "axios"
import { useEffect, useState } from "react"
import { backendUrl } from "../../config"

import '../styles/Container.scss'
import { useSelector } from "react-redux"

const Student = () => {
    const [data, setData] = useState([])

    const departmentFilter = useSelector(state => state.department.action);

    console.log(departmentFilter)

    const getAllData = async()=>{
        try{
            // let data = await axios.get(`${backendUrl}`)
            // console.log(data.data)
            // setData(data.data)
            // console.log(departmentFilter)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getAllData()
    },[departmentFilter])
  return (
    <div className="container-con" >
    { data.length === 0 ? <div className="container-empty">
        <p>loading ...</p>
    </div> : data.map((d,i) =>(
        <div className="container-item" key={i} >
            <img src={d.photo} alt="" />
            <h4>{d.name}</h4>
            <h6>{d.department}</h6>
            <p>{d.attendance}</p>
        </div>
    ))}
</div>
  )
}

export default Student