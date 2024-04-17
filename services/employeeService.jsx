export const getAllEmployees = () => {
    return fetch("http://localhost:8088/users?isStaff=true").then(res => res.json())
}

export const getEmployeeByUserId = (userId) => {
    return fetch(`http://localhost:8088/employees?userId=${userId}&_expand=user`).then(res => res.json())
}