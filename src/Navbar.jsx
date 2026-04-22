import vite_logo from "./assets/vite.svg"
function Nav() {
    let user_name = "siva full stack developer";
    let react_official_page = "https://react.dev/"
    let person = {
        name: "Siva",
        age: 29,
        location: "Erode",
        job: "full stack developer"
    }
    let arr = [
        "html", "css", "javascript", "react", "node ", "mongodb"
    ]

    let ans = true;

    let role = "user"
    return (
        <>

            {
                role === "admin" ? (<div>
                    <h1>
                        Hi , admin
                    </h1>
                    <button>logout</button>
                </div>)
                    :
                    (
                        <h1>
                            welcome user
                        </h1>
                    )
            }
            <h1>
                Navbar
            </h1>

            <ol>
                <li>Html</li>
                <li id="css">css</li>
                <li>javascript</li>
                <li>react</li>
            </ol>
            <address>
                {
                    person.name
                }

                <br />
                {
                    arr[0]
                }
                <br />
                {
                    ans ? "true statement" : "false statement"
                }
            </address>
            <p>
                {user_name}
                <a href={react_official_page} target="_blank">
                    React official page
                </a>
            </p>
            <img src="https://img.freepik.com/free-photo/cybersecurity-concept-collage-design_23-2151877145.jpg?semt=ais_hybrid&w=740&q=80" alt="" />

            <img src={vite_logo} alt="" />


        </>
    )
}

export default Nav
