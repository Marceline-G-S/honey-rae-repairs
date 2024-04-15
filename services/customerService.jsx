export const fetchAllCustomers = () => {
    return fetch("http://localhost:8088/users?isStaff=false").then(res => res.json())
}