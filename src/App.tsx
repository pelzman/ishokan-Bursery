import MainRoutes from "./routes"
import { UserProvider } from "./context/authContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <div>
        <MainRoutes />
      </div>
    </UserProvider>
  )
}

export default App
