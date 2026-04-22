import { useRef } from "react"

export default function Ref() {
    let inputRef = useRef(null)
    console.log(inputRef);
    let user = "admin"

    return (
        <>
            <h1>Ref</h1>
            <input type="text" ref={inputRef} />
            <button
                onClick={
                    () => {
                        inputRef.current.focus()
                        inputRef.current.value = user
                    }
                }
            >Click</button>
        </>
    )
}