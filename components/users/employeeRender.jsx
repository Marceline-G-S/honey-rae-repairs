import { useEffect, useState } from "react"
import { getUserById } from "../../services/userService.jsx"

export const EmployeeRender = ({employeeObj}) => {
    const [employeeUser, setEmployeeUser] = useState({})

    useEffect(()=>{
        getUserById(employeeObj.userId).then((user)=>{setEmployeeUser(user)})
    }, [])
    

    return <div className="user">
                <div className="user-info">
                    <div>Name</div>
                    <div>{employeeUser.fullName}</div>
                </div>
                <div className="user-info">
                    <div>Email</div>
                    <div>{employeeUser.email}</div>
                </div>
            </div>
}