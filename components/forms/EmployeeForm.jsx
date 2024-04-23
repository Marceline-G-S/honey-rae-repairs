import { useEffect, useState } from "react"
import { getEmployeeByUserId, updateEmployee } from "../../services/employeeService.jsx"
import { EmployeeRender } from "../users/employeeRender.jsx"
import "./Form.css"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = ({getAndSetUser, currentUser}) => {
    const [loggedEmployee, setLoggedEmployee] = useState({specialty:"", rate:0})
    const navigate = useNavigate()

    // This says do not load the logged employee until currentUser has been loaded. 
    useEffect(() => {
        if (!!currentUser.id){
            getEmployeeByUserId(currentUser.id).then(
                user => {
                    setLoggedEmployee(user[0])}
            )
        }
    }, [currentUser])

    const handleSave = (event) => {
        event.preventDefault()
        updateEmployee(loggedEmployee).then(()=>{navigate(`/employees/${loggedEmployee.userId}`)})
    }

    return <>
    <form className="profile">
        <h2>Update Profile</h2>
        <fieldset>
            <div>
                <label>Specialty:</label>
                <input type="text" value={loggedEmployee.specialty} onChange={(event) => {setLoggedEmployee({...loggedEmployee, specialty:event.target.value})}} required className="form-control"></input>
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label>Hourly Rate:</label>
                <input type="number" value={loggedEmployee.rate} onChange={(event) => {setLoggedEmployee({...loggedEmployee, rate:parseFloat(event.target.value)})}} required className="form-control"></input>
            </div>
        </fieldset>
        <fieldset>
            <div>
                <button className="form-btn btn-primary" onClick={handleSave}>Save Profile</button>            
            </div>
        </fieldset>
    </form>
    </>
}