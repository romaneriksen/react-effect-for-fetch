import ArtListItem from './ArtListItem'

function ArtList ({arts}) {
    return (
        <ul>
            {arts.map((art, index) => (
                <ArtListItem key={index} image={art.imageURL} title={art.title} artistName={art.artist} publicationHistory={art.publicationHistory}/>
            ))}
        </ul>
    )
}

export default ArtList