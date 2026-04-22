import { Navigate } from "react-router-dom"
import Cookies from "js-cookie"

export default function ProtectedRouter({ children }) {
    let cookiesToken = Cookies.get("token")
    let token = localStorage.getItem("token")

    if (!cookiesToken) {
        return <Navigate to="/" />
    }

    return children
}