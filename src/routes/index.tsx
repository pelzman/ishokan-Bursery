
import { Route, Routes } from "react-router-dom";
// import LandingPage from "../features/client/pages/landingPage";
// import PrivateRoutes from "./publicRoutes";
import PublicRoutes from "./privateRoutes";
import NotFound from "../features/client/pages/notFound";

import ClientLayout from '../layouts/clientLayout'
import AboutUs from '../features/client/pages/aboutUs'
import Home from '../features/client/pages/home'
import Bursary from '../features/client/pages/bursery'
import Contact from '../features/client/pages/contact'
import Project from "../features/client/pages/projects";
import ToDonate from "../features/client/pages/donate";
import Dashboard from "../features/admin/pages/dashboard";
import Layout from "../layouts/adminLayout";
const MainRoutes = () => {
    return (
        <Routes>

            <Route path='/auth/*' element={<PublicRoutes />} />

            <Route path='/' element={<ClientLayout />}>
                <Route index={true} element={<Home />} />
                <Route path='bursary' element={<Bursary />} />
                <Route path='about/:id' element={<AboutUs />} />
                <Route path='about' element={<AboutUs />} />
                <Route path='contact' element={<Contact />} />
                <Route path='project' element={<Project />} />
                <Route path='donate' element={<ToDonate />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/admin" element={<Layout />}>
                <Route path='/admin' element={<Dashboard />} />
            </Route>

        </Routes>
    );
};
export default MainRoutes;

