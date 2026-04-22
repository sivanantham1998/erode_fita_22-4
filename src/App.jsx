import Dashboard from "./DashMenu"
import Nav from "./Navbar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import FunctionName from "./FileName"
import Props_demo from "./Property"
import State from "./Hooks/State"
import Effect from "./Hooks/Effect"
import Call from "./Hooks/MemoCallback"
import Ref from "./Hooks/Ref"
import Reducer from "./Hooks/Reducer"
import Calculator from "./Hooks/Calculator"
import Home from "./Home"
import Forms from "./Forms/Forms"
import List from "./Outputlist/List"
import { Route, Routes } from "react-router-dom"
import ProtectedRouter from "./ProtectedRouter"
import User from "./User/User"
import UserDetails from "./User/UserDetails"
import Products from "./Products"
import Create from "./CRUD/Create"
import { useDispatch, useSelector } from "react-redux"
import { add, remove } from "./todoSlice"
import { createContext, useState } from "react"
import FormRedux from "./formRedux"


let Uname = "Rithika", location = "Erode", qualification = "BE"
let obj = { Uname, location, qualification }


export const demoContext = createContext()
function App() {

  const [name, setname] = useState("")
  let data = useSelector((state) => state)
  console.log(data);


  let dispach = useDispatch()
  return (
    <>
      <h1>
        React.js Javascript Library
      </h1>

      <demoContext.Provider value={obj}>
        <FormRedux />

        {/* <input type="text" placeholder="enter data..." value={name} onChange={(e) => setname(e.target.value)} />
      <button onClick={() => dispach(add(name))}>Add</button>

      <ul>
        {data.todo.list.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => dispach(remove(index))}>remove</button>
            </li>
          )
        })}
      </ul> */}
        {/* <h1>
        {data}
      </h1>
      <button onClick={() => dispach({ type: "INCREMENT" })}>
        Click to Increment
      </button > */}
        {/* <Props_demo data={obj} />
      <State />
      <Effect />
      <Call /> */}

        {/* <Ref />
      <Reducer />
      <Calculator /> */}

        {/* <Forms /> */}

        {/* <List /> */}

        <Routes>
          <Route path="/" element={<State />}>
            <Route index element={<Home />} />
            <Route path="calc" element={<Calculator />} />
            <Route path="effect" element={<Effect />} />
            <Route path="hook">
              <Route path="memo" element={
                <ProtectedRouter>
                  <Call />
                </ProtectedRouter>
              } />
              <Route path="ref" element={
                <ProtectedRouter>
                  <Ref />
                </ProtectedRouter>
              } />
              <Route path="reducer" element={<Reducer />} />
            </Route>
            <Route path="user" element={<User />} />

            <Route path="user/:id" element={<UserDetails />} />

            <Route path="/dashboard" element={<Dashboard />} />


            <Route path="products" element={<Products />} />

            <Route path="create" element={<Create />} />
          </Route>
        </Routes>
      </demoContext.Provider>

    </>
  )
}

export default App
