import MainRoutes from "./routes"
import { UserProvider } from "./context/userContext"


function App() {
  return (
    <UserProvider>
        <div>
      <MainRoutes />
    </div>
    </UserProvider>
  )
}

export default App
