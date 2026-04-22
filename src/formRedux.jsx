import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser, fetchUser } from "./userSlice"

export default function FormRedux() {
    const [name, setName] = useState("")
    const data = useSelector((state) => state.users.list)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    const handleAdd = () => {
        dispatch(addUser({ name }))
    }
    return (
        <>
            <h1>
                Form Redux
            </h1>

            <input type="text" placeholder="Enter name here..." value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleAdd}>Add</button>


            {
                data.length > 0 ? (<ul>
                    {
                        data.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>) : (<p>No data found</p>)
            }

        </>
    )
}