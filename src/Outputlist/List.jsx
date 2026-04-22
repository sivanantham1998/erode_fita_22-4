import { useEffect, useState } from "react"

export default function List() {
    let a = [
        "hmtl", "css", "task", "demo"
    ]

    let student = [
        {
            name: 'arun',
            gender: 'Male',
            physics: 88,
            maths: 87,
            english: 78
        },
        {
            name: 'rajesh',
            gender: 'Male',
            physics: 96,
            maths: 100,
            english: 95
        },
        {
            name: 'moorthy',
            gender: 'Male',
            physics: 89,
            maths: 90,
            english: 70
        },
        {
            name: 'raja',
            gender: 'Male',
            physics: 30,
            maths: 25,
            english: 40
        },
        {
            name: 'usha',
            gender: 'Female',
            physics: 67,
            maths: 45,
            english: 78
        },
        {
            name: 'priya',
            gender: 'Female',
            physics: 56,
            maths: 46,
            english: 78
        },
        {
            name: 'Sundar',
            gender: 'Male',
            physics: 12,
            maths: 67,
            english: 67
        },
        {
            name: 'Kavitha',
            gender: 'Female',
            physics: 78,
            maths: 71,
            english: 67
        },
        {
            name: 'Dinesh',
            gender: 'Male',
            physics: 56,
            maths: 45,
            english: 67
        },
        {
            name: 'Hema',
            gender: 'Female',
            physics: 71,
            maths: 90,
            english: 23
        },
        {
            name: 'Gowri',
            gender: 'Female',
            physics: 100,
            maths: 100,
            english: 100
        },
        {
            name: 'Ram',
            gender: 'Male',
            physics: 78,
            maths: 55,
            english: 47
        },
        {
            name: 'Murugan',
            gender: 'Male',
            physics: 34,
            maths: 89,
            english: 78
        },
        {
            name: 'Jenifer',
            gender: 'Female',
            physics: 67,
            maths: 88,
            english: 90
        }
    ]

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setData(json)

            })
    }, [])

    let filteredData = data.filter(
        (a, index) => a.userId === 2
    )

    console.log(filteredData);

    return (
        <>
            <h1>
                Output list
            </h1>

            <div>
                {
                    a.map((item, index) => {
                        return (
                            <p key={index}>
                                {item}
                            </p>
                        )
                    })
                }
            </div>



            <div id="main">
                {
                    student.map((item, index) => {
                        return (
                            <div className="border" style={{ width: "200px" }} key={index}>
                                <h1>
                                    {item.name}
                                </h1>
                                <address>
                                    {item.gender}
                                </address>
                                <p>
                                    total {item.english + item.maths + item.physics}
                                </p>
                            </div>
                        )
                    })
                }
            </div>



            <table className="table table-bordered">
                <tr>
                    <th>Userid</th>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
                {
                    filteredData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {item.userId}
                                </td>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.title}
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}