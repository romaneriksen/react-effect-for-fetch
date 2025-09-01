
function UserListItem ({key, image, name, bgcolor, email}) {
    return (
        <li key = {key} style={{ backgroundColor: bgcolor, padding: '10px' }}>
            <div>
                <img src={image}/>
            </div>
            <div >
                {name}
            </div>
            <div >
                {email}
            </div>
        </li>
    )
}

export default UserListItem