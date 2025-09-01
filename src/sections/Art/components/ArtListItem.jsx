import PublicationHistoryList from "./PublicationHistoryList"
import "../../../App.css"

function ArtListItem ({ key, image, title, artistName, publicationHistory }) {
    return (
        <li
            key = {key}
        >
            <div>
                <img src={`https://boolean-uk-api-server.fly.dev/${image}`} />
            </div>
            <div>
                {title}
            </div>
            <div>
                {artistName}
            </div>
            <div>
                <PublicationHistoryList history={publicationHistory}/>
            </div>

        </li>
    )
}

export default ArtListItem