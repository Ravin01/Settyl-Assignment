/* eslint-disable react/prop-types */
import { useState } from "react"
import User from "./User"

import '../styles/Nav.scss'

const Nav = ({setSearchInput, searchInput}) => {
    const [isUserDivOPen, setIsUserDivOpen] = useState(false)

    const handleOpenUserDiv = () =>{
        setIsUserDivOpen(!isUserDivOPen)
    }


    

    const handleChange=(e)=>{
        setSearchInput(e.target.value)
    }

  return (
    <>
    <div className="nav-container">
        <div className="nav-header">
            <input type="text" className="nav-search-input" placeholder="search students" name="search" id="search" value={searchInput} onChange={handleChange} />
        </div>
        <div className="nav-user" onClick={handleOpenUserDiv} >
            <img src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" alt="" />
        </div>
        {isUserDivOPen && <User />}
    </div> 
    </>
  )
}

export default Nav