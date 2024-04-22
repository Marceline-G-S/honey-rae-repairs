import { useEffect, useState } from "react"
import { getEmployeeByUserId, updateEmployee } from "../../services/employeeService.jsx"
import { EmployeeRender } from "../users/employeeRender.jsx"
import "./Form.css"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = ({currentUser}) => {
    const [loggedEmployee, setLoggedEmployee] = useState({specialty:"", rate:0})
    const navigate = useNavigate()

    useEffect(()=>{
            getEmployeeByUserId(currentUser.id).then((loggedUser) => {
                setLoggedEmployee(loggedUser[0])
            }) 
    }, [])
    
    useEffect(() => {
        getEmployeeByUserId(currentUser.id)
            .then((loggedUser) => {
                if (loggedUser && loggedUser.length > 0) {
                    setLoggedEmployee(loggedUser[0]);
                } else {
                    // Handle the case where no data is fetched
                    console.error('No employee data found');
                }
            })
            .catch((error) => {
                // Handle fetch errors
                console.error('Error fetching employee data:', error);
            });
    }, [currentUser]);

    const handleSave = (event) => {
        event.preventDefault()
        updateEmployee(loggedEmployee).then(()=>{navigate(`/employees/${loggedEmployee.userId}`)})
    }

    // Check if loggedEmployee has the necessary properties before rendering the form
    if (!loggedEmployee.specialty || !loggedEmployee.rate) {
        return <div>Loading...</div>; // Or any other loading indicator
    }

    return <>
    <form className="profile">
        <h2>Update Profile</h2>
        <fieldset>
            <div>
                <label>Specialty:</label>
                <input type="text" value={loggedEmployee.specialty ?? ""} onChange={(event) => {setLoggedEmployee({...loggedEmployee, specialty:event.target.value})}} required className="form-control"></input>
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label>Hourly Rate:</label>
                <input type="number" value={loggedEmployee.rate ?? 0} onChange={(event) => {setLoggedEmployee({...loggedEmployee, rate:parseFloat(event.target.value)})}} required className="form-control"></input>
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