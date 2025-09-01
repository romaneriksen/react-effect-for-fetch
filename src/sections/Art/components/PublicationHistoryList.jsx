
function PublicationHistoryList ({history}) {
    return (
        <>
            <h4>Publication History</h4>
            <ul>
            {history.map((hist, index) => (
                <li key = {index}> {hist} </li>
            ))}
            </ul>
        </>

    )
}

export default PublicationHistoryList