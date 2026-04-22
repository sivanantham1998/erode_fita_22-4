import { useReducer } from "react"
export default function Reducer() {
    const [state, dispatch] = useReducer(
        (state, action) => {
            if (action.type === "+") {
                return { count: state.count + 1 }
            }
            else if (action.type === "-") {
                return { count: state.count - 1 }
            }
            else if (action.type === "reset") {
                return { count: 0 }
            }
        },
        {
            count: 0
        }
    )
    return (
        <>
            <h1>Reducer</h1>
            <h4>
                the state value is :
                {state.count}
            </h4>

            <button onClick={
                () => {
                    dispatch({ type: "+" })
                }
            }>Increment</button>
            <button onClick={
                () => {
                    dispatch({ type: "-" })
                }
            }>Decrement</button>
            <button onClick={
                () => {
                    dispatch({ type: "reset" })
                }
            }>Reset</button>
        </>
    )
}