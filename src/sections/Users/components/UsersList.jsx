import UserListItem from "./UsersListItem"

function UserList ({users}) {
    return (
        <ul>
            {users.map((user, index) => (
                <UserListItem key={index} image={user.profileImage} name={user.firstName + user.LastName} bgcolor={user.favouriteColour} email={user.email}/>
            ))}
        </ul>
    )
} 

export default UserList