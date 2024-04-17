import "./customers.css"
import { useEffect, useState } from "react"
import { fetchAllCustomers } from "../../services/customerService.jsx"
import { User } from "../users/user.jsx"
import { Link } from "react-router-dom"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetchAllCustomers().then(setCustomers)
    }, [])

    return <div className="customers">
        {customers.map((user) => {
            return (<Link to={`/customers/${user.id}`}>
                <User key={user.id} user={user} />
            </Link>
            )
        })}
    </div>
}