import { useEffect, useState } from "react"
import "./employees.css"
import { getAllEmployees } from "../../services/employeeService.jsx"
import { User } from "../users/user.jsx"
import { Link } from "react-router-dom"

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        getAllEmployees().then(setEmployees)
    }, [])

    return <div className="employees">
        {employees.map((user) => {
            return <Link key={user.id} to={`/employees/${user.id}`}>
                        <User user={user}/>
                    </Link>
        })}
    </div>
}