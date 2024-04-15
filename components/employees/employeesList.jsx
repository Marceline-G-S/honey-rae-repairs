import { useEffect, useState } from "react"
import "./employees.css"
import { getAllEmployees } from "../../services/employeeService.jsx"
import { User } from "../users/user.jsx"

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        getAllEmployees().then(setEmployees)
    }, [])

    return <div className="employees">
        {employees.map((user) => {
            return <User key={user.id} user={user}/>
        })}
    </div>
}