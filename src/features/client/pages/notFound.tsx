import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center space-y-[10px]'>
        <h1>This page can not be found</h1>
        <p>Error  404</p>
<Link to ='/profile/'>
<p>go back home</p>
</Link>
       
    </div>
  )
}

export default NotFound