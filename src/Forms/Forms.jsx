import { useEffect, useState } from "react";

export default function Forms() {

    // const [name, setname] = useState(null)

    const [formData, setFormdata] = useState({
        user: null,
        email: null,
        password: null
    })

    const [fetchdata, setFetchdata] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormdata(
            (prev) => ({
                ...prev,
                [name]: value
            })
        )
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if (!formData.user || !formData.email || !formData.password) {
            alert("Please fill all the fields")
            return
        }
        console.log("Form submitted");
        localStorage.setItem("userdata", JSON.stringify(formData))
        console.log(formData);
    }
    useEffect(() => {
        const data = localStorage.getItem("userdata")
        setFetchdata(JSON.parse(data))
    }, [formData])

    console.log(fetchdata)
    const handlereset = () => {
        console.log("Form reset");
        localStorage.removeItem("userdata")
    }
    return (
        <>
            <h1>Forms</h1>

            <form onSubmit={handlesubmit} onReset={handlereset}>
                <input type="text" placeholder="Enter name here..." name="user" value={formData.user} onChange={handleChange} />
                <br />
                <input type="email" placeholder="Enter email here..." name="email" value={formData.email} onChange={handleChange} />
                <br />
                <input type="text" placeholder="Enter password here..." name="password" value={formData.password} onChange={handleChange} />
                <br />
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </>
    )
}