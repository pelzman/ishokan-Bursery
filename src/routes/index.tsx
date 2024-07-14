
import { Route, Routes } from "react-router-dom";
import LandingPage from "../features/client/pages/landingPage";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
import NotFound from "../features/client/pages/notFound";


const MainRoutes = () => {
    return (
        <Routes>
            <Route index={true}  element={<LandingPage />} />
            <Route path='/auth/*' element={<PublicRoutes />} />
            <Route path="/profile/*" element={<PrivateRoutes />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
export default MainRoutes;

