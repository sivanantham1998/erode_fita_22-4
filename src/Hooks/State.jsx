import { useContext, useState } from "react"
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import FormDemo from "../Forms/FormDemo"
import { demoContext } from "../App"

function State() {

    const { Uname, location, qualification } = useContext(demoContext)
    console.log(Uname, location, qualification);

    let [a, b] = useState("Rithika")
    let [count, setCount] = useState(0)
    const navigate = useNavigate()

    // document.getElementById("btn").addEventListener("click", () => {
    //     b("Rithika")
    // })
    return (
        // <>
        //     <h1>
        //         State using react
        //     </h1>

        //     <p>
        //         State value is {a}
        //         <br />
        //         Count value is {count}
        //     </p>

        //     <button id="btn" onClick={
        //         () => {
        //             b("Rithika BE(CSE)")
        //             setCount(count + 1)
        //         }
        //     }>
        //         Update
        //     </button>
        //     <button onClick={
        //         () => {
        //             setCount(count - 1)
        //         }
        //     }>
        //         Less
        //     </button>
        //     <button onClick={
        //         () => {
        //             setCount(0)
        //         }
        //     }>
        //         Reset
        //     </button>
        //     <br /><br />
        //     <button onClick={
        //         () => {
        //             navigate("/calc")
        //         }
        //     }>
        //         Click to calc page
        //     </button>

        //     <h1 onClick={
        //         () => {
        //             navigate("/effect")
        //         }
        //     }>
        //         click to effect
        //     </h1>

        //     <Link to="/hook/memo">
        //         <button>
        //             Memo page
        //         </button>
        //     </Link>

        //     <a href="/hook/ref">ref</a>

        //     <NavLink to="/hook/ref">
        //         <button>
        //             ref page
        //         </button>
        //     </NavLink>
        // </>
        <>
            <nav>
                <Link to="/">
                    Home
                </Link>
                <br />
                <Link to="/calc" state={a}>
                    Calc program
                </Link>

                <Link to="/products?category=electronics&id=1">
                    Products
                </Link>
            </nav>

            {/* <FormDemo /> */}

            <Outlet />
        </>
    )
}

export default State