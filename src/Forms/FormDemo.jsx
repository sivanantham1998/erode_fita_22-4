import React, { useEffect, useState } from 'react'
import { toast, ToastContainer, Slide } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
export default function FormDemo() {
    // const [userName, setUsername] = useState(null)
    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        date: new Date().toISOString()
    })

    function handleChange(e) {

        let { name, value } = e.target
        setFormdata(
            {
                ...formData,
                [name]: value
            }
        )

    }
    function login(e) {
        e.preventDefault()
        if (!formData.name || !formData.address || !formData.city || !formData.state || !formData.pincode || !formData.phone || !formData.email || !formData.password) {
            // alert("Please fill all the fields")
            toast.error("Please fill alll fields")
            return
        }
        console.log(formData);
        localStorage.setItem("formData", JSON.stringify(formData))
        toast.success("Form submitted successfully")
    }

    useEffect(() => {
        let data = localStorage.getItem("formData")
        console.log(data);
        console.log(JSON.parse(data));
    }, [])
    function cancel() {
        toast.warning("Form cancelled")
        console.log("Cancel");
        alert("Form cancel")
    }
    return (
        <>
            <ToastContainer position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide} />
            <form onSubmit={login} onReset={cancel}>
                {/* <input type="text" placeholder='Enter name here...' value={userName} name='username'
                    onChange={
                        (e) => {
                            setUsername(e.target.value)
                        }
                    }
                /> */}

                <input type="text" placeholder='Name....' name='name' value={formData.name}
                    onChange={(e) => {
                        setFormdata({ ...formData, name: e.target.value })
                    }} />
                <input type="text" placeholder='Email....' name='email' value={formData.email} onChange={(e)=>{
                    setFormdata({...formData,email:e.target.value})
                }} />
                <input type="text" placeholder='Password....' name='password' value={formData.password} onChange={handleChange} />
                <input type="text" placeholder='Phone....' name='phone' value={formData.phone} onChange={handleChange} />
                <input type="text" placeholder='Address....' name='address' value={formData.address} onChange={handleChange} />
                <input type="text" placeholder='City....' name='city' value={formData.city} onChange={handleChange} />
                <input type="text" placeholder='State....' name='state' value={formData.state} onChange={handleChange} />
                <input type="text" placeholder='Pincode....' name='pincode' value={formData.pincode} onChange={handleChange} />
                <br />
                <button type="submit">Save</button>
                <button type="reset">Reset</button>
            </form>
        </>
    )
}
