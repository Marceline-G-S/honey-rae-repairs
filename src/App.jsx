import { useEffect, useState } from "react";
import { getAllTickets } from "../services/ticketService/ticketService.jsx";

export const App = () => {
  const [displayedTickets, setdisplayedTickets] = useState([]);
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyToggle, setShowEmergencyToggle] = useState(false)
  

  //Initial setup of state
  useEffect(() => {
    getAllTickets().then(ticketsArr => {setAllTickets(ticketsArr)
    setdisplayedTickets(ticketsArr)})
  }, [])

  //Change displayed tickets based on showEmergencyToggle
  useEffect(() => {
    if (showEmergencyToggle) {
      const emergencyTickets = allTickets.filter((ticket) => ticket.emergency === true)
      setdisplayedTickets(emergencyTickets)
    } else {
      setdisplayedTickets(allTickets)
    }
  }, [showEmergencyToggle])



  return (<>
  <div className="tickets-container">
    <h2>Tickets : </h2>
    <div>
      <button onClick={() => setShowEmergencyToggle(showEmergencyToggle ? false : true)} className="filter-btn btn-primary">emergency toggle</button>
    </div>
    <article className="tickets">
      {displayedTickets.map(ticket => {
      return ( 
        <section className="ticket" key={ticket.id}>
          <header className="ticket-info">#{ticket.id}</header>
          <div>{ticket.description}</div>
          <footer>
            <div>
              <div className="ticket-info">emergency</div>
              <div>{ticket.emergency ? "yes" : "no"}</div>
            </div>
          </footer>
      </section>)})}
    </article>
  </div>
  </>)
}