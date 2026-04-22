import { useLocation } from "react-router-dom"

function Dashboard() {
    let location = useLocation()
    console.log(location);
    console.log(location.state.student);

    return (
        <div>
            <h1>Dashboard created</h1>
        </div>
    )
}

export default Dashboard