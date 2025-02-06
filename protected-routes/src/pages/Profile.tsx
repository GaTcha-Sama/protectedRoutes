import { Navigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { Navbar } from "../components/Navbar"

export const Profile = () => {
  const {isConnected} = useAuthContext()
  if(!isConnected) {
    return <Navigate to="/" />
  }
  return (
    <div>
      <Navbar />
      Profile
    </div>
  )
}
