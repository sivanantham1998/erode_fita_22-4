import React, { useEffect, useState } from 'react'
import { ToastContainer, Flip, toast } from 'react-toastify';
import axios from 'axios';
export default function Create() {
    let api_url = import.meta.env.API_URL
    let url = api_url
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        age: ""
    })

    const [data, setData] = useState([])

    function handlechange(e) {
        let { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value })

    }
    async function handlesave(e) {
        e.preventDefault()
        if (!formdata.name || !formdata.email || !formdata.age) {
            toast.error("Please fill all the fields")
        }
        else {
            const res = await axios.post(url, formdata)
            console.log(res.data);
            if (res.status === 201) {
                toast.success("Data saved successfully")
                setFormdata({
                    name: "",
                    email: "",
                    age: ""
                })
            }
            else {
                toast.error("Data not saved")
            }

        }


    }

    useEffect(() => {
        axios.get(url).then((res) => {
            console.log(res.data);
            setData(res?.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    async function handledelete(id) {
        try {
            const res = await axios.delete(url + "/" + id)
            if (res.status === 200) {
                axios.get(url).then((res) => {
                    setData(res.data)
                }).catch((err) => {
                    console.log(err);

                })
                toast.success("Data deleted successfully")
            }
            else {
                toast.error("Data not deleted")
            }
        } catch (error) {
            console.log(error);

        }

    }

    async function handleedit(item) {
        console.log(item);
        let modifiedName = prompt("enter update name")
        try {
            const res = await axios.put(url + "/" + item.id, { name: modifiedName })
            console.log(res);

            if (res.status === 200) {
                axios.get(url).then((res) => {
                    setData(res.data)
                }).catch((err) => {
                    console.log(err);
                })
                toast.success("Data updated successfully")
            }
            else {
                toast.error("Data not updated")
            }
        } catch (error) {

        }

    }
    return (
        <div className='container' >
            <ToastContainer position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip} />
            <form onSubmit={handlesave}>
                <input type="text" name="name" id="" placeholder='Name...' className='form-control my-2' value={formdata.name} onChange={handlechange} />
                <input type="text" name="email" id="" placeholder='Email' className='form-control my-2' value={formdata.email} onChange={handlechange} />
                <input type="text" name="age" placeholder='Age...' className='form-control my-2' value={formdata.age} onChange={handlechange} />

                <button type='submit' className='btn btn-success'>Save</button>
                <button type='reset' className='btn btn-danger'>Reset</button>
            </form>

            <table className='table table-bordered table-hover'>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>

                {
                    data.length === 0 ? (
                        <tr>
                            <td colSpan={4} className='text-center'>No data found</td>
                        </tr>
                    ) : (
                        data?.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => handledelete(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                        </svg></button>

                                        <button className='btn btn-primary' onClick={() => handleedit(item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    )
                }

            </table>
        </div>
    )
}
