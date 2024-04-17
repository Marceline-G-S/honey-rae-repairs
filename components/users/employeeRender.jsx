export const EmployeeRender = ({user}) => {
    return <div className="user">
                <div className="user-info">
                    <div>Name</div>
                    <div>{user.fullName}</div>
                </div>
                <div className="user-info">
                    <div>Email</div>
                    <div>{user.email}</div>
                </div>
            </div>
}