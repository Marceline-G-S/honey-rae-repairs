import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../../services/employeeService.jsx"
import "./employees.css"

export const EmployeeDetails = () => {
    const {employeeId} = useParams()
    const [employee, setemployee] = useState({})

    useEffect(()=>{
        getEmployeeByUserId(employeeId).then(data => setemployee(data[0]))
    }, [employeeId])

    return <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div><span className="employee-info">Email : </span>{employee.user?.email}</div>
            <div><span className="employee-info">Specialty : </span>{employee.specialty}</div>
            <div><span className="employee-info">Rate # : </span>{employee.rate}</div>
        </section>
}