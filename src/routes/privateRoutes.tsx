
import { Routes, Route } from 'react-router-dom'
import ClientLayout from '../layouts/clientLayout'
import AboutUs from '../features/client/pages/aboutUs'
import Home from '../features/client/pages/home'
import Bursary from '../features/client/pages/bursery'
import Contact from '../features/client/pages/contact'

const PrivateRoutes = () => {
    return (
        < Routes>
            <Route path='client' element={<ClientLayout />}>
                <Route index={true} element={<Home />} />
                <Route path='bursary' element={<Bursary />} />
                <Route path='about' element={<AboutUs />} />
                <Route path='contact' element={<Contact />} />
            </Route>

        </Routes>
    )
}

export default PrivateRoutes