

export const FilterBar = ({setSearchBar, setShowEmergencyToggle, showEmergencyToggle}) => {

return <div className="filter-bar">
        <button onClick={() => setShowEmergencyToggle(showEmergencyToggle ? false : true)} className="filter-btn btn-primary">emergency toggle</button>
        <input onChange={(event) => {setSearchBar(event.target.value)}} type="text" className="ticket-search" placeholder="Search Tickets"/>
    </div>
}