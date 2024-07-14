
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className=' h-screen text-center space-y-[10px] flex items-center justify-center'>
      <div>
        <h1>This page can not be found</h1> <br />
        <p>Error  404</p>
        <Link to='/'>
          <p>go back home</p>
        </Link>
      </div>


    </div>
  )
}

export default NotFound