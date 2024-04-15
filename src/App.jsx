import { CustomerList } from "../components/customers/CustomerList.jsx"
import { EmployeesList } from "../components/employees/employeesList.jsx"
import { TicketList } from "../components/tickets/TicketList.jsx"

export const App = () => {


  return <>
    {/*<TicketList/>*/}
    <CustomerList/>
    <EmployeesList/>
  </>
}