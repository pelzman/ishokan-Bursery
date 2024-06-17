
import { Routes, Route } from 'react-router-dom'
import ClientLayout from '../layouts/clientLayout'
import AboutUs from '../features/client/pages/aboutUs'

const PrivateRoutes = () => {
    return (
        < Routes>
            <Route path='client' element={<ClientLayout />}>
                <Route path='about' element={<AboutUs/>}/>

                
            </Route>
        
        </Routes>
    )
}

export default PrivateRoutes