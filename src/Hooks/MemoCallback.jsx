import { useCallback, useMemo, useState } from "react"

function Call() {
    let [num, setNum] = useState(0)

    let handleMemo = useMemo(() => {
        console.log("usememo")
        return num * 6524632849324
    }, [num])

    let handleCallback = useCallback(
        (a, b) => {
            console.log("usecallback")
            return num * a * b
        }, [num]
    )
    return (
        <>
            <h1>
                Callback ,{num}
                <br />
                memo value {handleMemo}
                <br />
                callback value {handleCallback(2, 3)}
            </h1>
            <button onClick={
                () => {
                    setNum(num + 1)
                }
            }>
                Click to add
            </button>
        </>
    )
}

export default Call