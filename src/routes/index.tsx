
import { Route, Routes } from "react-router-dom";

import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
import NotFound from "../features/client/pages/notFound";


const MainRoutes = () => {
    return (
        <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route path='/auth/*' element={<PublicRoutes />} />
            <Route path="/profile/*" element={<PrivateRoutes />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
export default MainRoutes;

