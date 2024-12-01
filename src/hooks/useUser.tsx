import { useUserContext } from "../context/authContext";


export const useUsers = () => {
    const { users, error, loading, addUser, loginUser, logout } = useUserContext()
    return { users, error, loading, addUser, loginUser, logout }
}
