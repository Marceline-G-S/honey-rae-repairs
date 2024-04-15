import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/emplyeeService.jsx"

export const Ticket = ({ticket}) => {
  const [employees, setEmployees] = useState([])
  const [assignedEmployee, setAssignedEmplyee] = useState({})
  const [showEmergencyToggle, setShowEmergencyToggle] = useState(false)
  const [searchBar, setSearchBar] = useState("")

  useEffect(() => {
    getAllEmployees().then(setEmployees)
  }, [])

  useEffect(()=>{
    const foundEmployee = employees.find(employee => employee.id === ticket.employeeTickets[0]?.employeeId)
    setAssignedEmplyee(foundEmployee)
  },[employees, ticket])


  return <section className="ticket">
  <header className="ticket-info">#{ticket.id}</header>
  <div>{ticket.description}</div>
  <footer>
    <div>
      <div className="ticket-info">assignee:</div>
      <div>{assignedEmployee ? assignedEmployee.user?.fullName : "Unassigned"}</div>
      <div className="ticket-info">emergency</div>
      <div>{ticket.emergency ? "yes" : "no"}</div>
    </div>
  </footer>
</section>
}