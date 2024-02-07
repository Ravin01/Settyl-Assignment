/* eslint-disable react/prop-types */
import { useState } from "react"
import User from "./User"

import '../styles/Nav.scss'

const Nav = ({setSearchInput, searchInput, setSideNavClass, sideNavClass}) => {
    const [isUserDivOPen, setIsUserDivOpen] = useState(false)

    const handleOpenUserDiv = () =>{
        setIsUserDivOpen(!isUserDivOPen)
    }


    

    const handleChange=(e)=>{
        setSearchInput(e.target.value)
    }

    const [bars, setBars] = useState('bars')

    const handleOpenSideNav = () =>{
            if(sideNavClass === 'sideNav-container'){
                setSideNavClass('sideNav-container-open')
                setBars('x')
            }else{
                setBars('bars')
                setSideNavClass('sideNav-container')
            }
    }

  return (
    <>
    <div className="nav-container">
        <div className="nav-header">
            <i className={`fa-solid fa-${bars} nav-bars`} onClick={handleOpenSideNav} ></i>
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