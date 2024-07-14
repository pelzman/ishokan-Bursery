import Footer from "./component/footer"
import { Outlet } from "react-router-dom"
import Navbar from "./component/navbar"

const ClientLayout = () => {
    return (
        <div >
            <div >
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default ClientLayout