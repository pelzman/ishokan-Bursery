import { Route, Routes } from 'react-router-dom'
import Login from '../features/auth/pages/login'
import Register from '../features/auth/pages/register'
import ForgotPassword from '../features/auth/pages/forgetPassword'
import ResetPassword from '../features/auth/pages/resetPsssword'

const PrivateRoutes = () => {
  return (
    <Routes>

      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<ResetPassword />} />

    </Routes>
  )
}

export default PrivateRoutes