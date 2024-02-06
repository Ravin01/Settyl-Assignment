import '../styles/User.css'

const User = () => {
  return (
    <div className="user-container" >
        <div className="user-item">
        <i className="fa-solid fa-user"></i>
            <h6>profile</h6>
        </div>
        <div className="user-item">
        <i className="fa-solid fa-gear"></i>
            <h6>settings</h6>
        </div>
        <div className="user-item">
        <i className="fa-solid fa-right-from-bracket"></i>
            <h6>logout</h6>
        </div>
    </div>
  )
}

export default User