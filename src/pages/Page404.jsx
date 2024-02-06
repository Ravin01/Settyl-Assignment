import { Link } from "react-router-dom"


const Page404 = () => {
  return (
    <div>
        404 - page not found
        <Link to='/dashboard' >Go Back</Link>
    </div>
  )
}

export default Page404