export const fetchAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=user").then(res => res.json())
}