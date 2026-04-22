import { useEffect, useLayoutEffect, useState } from "react"

function Effect() {
    let [count, setCount] = useState(0);
    let [show, setShow] = useState(true);
    useEffect(
        () => {
            console.log("useeffect")
            document.title = `Count is ${count}`;
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => console.log(json))
        }, [count]
    )

    function handleShow() {
        if (window.innerWidth >= 768) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }
    useLayoutEffect(
        () => {
            handleShow()

            window.addEventListener("resize", handleShow)

            return () => {
                window.removeEventListener("resize", handleShow)
            }
        }, []
    )
    return (
        <>
            <h1>
                Useeffect
            </h1>
            <h4>
                Value is {count}
            </h4>

            <button onClick={
                () => {
                    setCount(count + 1)
                }
            }>
                Click to add
            </button>

            {
                show && (
                    <>
                        <h1>
                            Hello
                        </h1>
                    </>
                )
            }
        </>
    )
}

export default Effect