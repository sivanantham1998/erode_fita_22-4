import { Link, useNavigate } from "react-router-dom"

export default function User() {
    const student = [
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

    function show(data) {
        alert("working")
        console.log(data);

    }

    const navigate = useNavigate()
    return (
        <div>
            <h1>User</h1>

            <button onClick={
                () => {
                    navigate("/dashboard", { state: { student } })
                }
            }>
                Goto Dashboard
            </button>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Total</th>
                    <th>Details</th>
                </tr>
                {
                    student.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.name}</td>
                                <td>{value.gender}</td>
                                <td>{value.physics + value.maths + value.english}</td>
                                <td>
                                    <Link to={"/user/" + value.name}>
                                        <button
                                        //  onClick={
                                        //     () => {
                                        //         show(value)
                                        //     }
                                        // }
                                        >
                                            Click
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}