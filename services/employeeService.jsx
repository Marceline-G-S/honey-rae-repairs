export const getAllEmployees = () => {
    return fetch("http://localhost:8088/users?isStaff=true").then(res => res.json())
}

export const getEmployeeByUserId = (userId) => {
    return fetch(`http://localhost:8088/employees?userId=${userId}`).then(res => res.json())
}

export const updateUser = (userObj) => {
    return fetch(`http://localhost:8088/users/${userObj.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
    })
}

export const updateEmployee = (employeeObj) => {
    return fetch(`http://localhost:8088/employees/${employeeObj.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeObj)
    })
}