import "./customers.css"
import { useEffect, useState } from "react"
import { fetchAllCustomers } from "../../services/customerService.jsx"
import { User } from "../users/user.jsx"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetchAllCustomers().then(setCustomers)
    }, [])

    return <div className="customers">
        {customers.map((user) => {
            return <User key={user.id} user={user}/>
        })}
    </div>
}