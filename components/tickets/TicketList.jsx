import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService.jsx";
import "./ticket.css"
import { Ticket } from "./ticket.jsx";
import { FilterBar } from "./componentsFilterBar.jsx";

export const TicketList = () => {
  const [displayedTickets, setdisplayedTickets] = useState([]);
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyToggle, setShowEmergencyToggle] = useState(false)
  const [searchBar, setSearchBar] = useState("")
  

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
}, [showEmergencyToggle, allTickets])


// Change results based on search bar input
useEffect(() => {
    setdisplayedTickets(allTickets.filter((ticket) => ticket.description.toLowerCase().includes(searchBar.toLocaleLowerCase()) ))
}, [searchBar, allTickets])

  return (<>
  <div className="tickets-container">
    <h2>Tickets : </h2>
    <FilterBar setSearchBar={setSearchBar} setShowEmergencyToggle={setShowEmergencyToggle} showEmergencyToggle={showEmergencyToggle}/>
    <article className="tickets">
      {displayedTickets.map((ticketObject) => {
      return ( 
        <Ticket ticket={ticketObject} key={ticketObject.id}/>
        )})}
    </article>
  </div>
  </>)
}