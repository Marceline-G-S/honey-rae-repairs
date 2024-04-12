import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService.jsx";
import "./ticket.css"
import { Ticket } from "./ticket.jsx";

export const TicketList = () => {
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
      {displayedTickets.map((ticketObject) => {
      return ( 
        <Ticket ticket={ticketObject} key={ticketObject.id}/>
        )})}
    </article>
  </div>
  </>)
}