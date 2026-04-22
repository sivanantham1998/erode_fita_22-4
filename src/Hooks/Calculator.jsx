import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function Calculator() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [sym, setSym] = useState("")
    const [result, setResult] = useState(0)
    const location = useLocation()
    const { a } = location.state || {}
    return (
        <>
            <h1>Calculator</h1>
            <button onClick={() => setNum1(1)}>1</button>
            <button onClick={() => setNum2(2)}>2</button>
            <button onClick={() => setSym("+")}>+</button>
            <button onClick={
                () => {
                    let ans = eval(`${num1} ${sym} ${num2}`)
                    setResult(ans)
                }
            }>=</button>

            <h1>
                {num1} {sym} {num2} = {result}
            </h1>
        </>
    )
}