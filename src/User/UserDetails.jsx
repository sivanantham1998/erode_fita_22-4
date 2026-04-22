import { useParams } from "react-router-dom"

export default function UserDetails() {
    const { id } = useParams()
    return (
        <div>
            <h1>UserDetails</h1>
            <p>{id}</p>
        </div>
    )
}