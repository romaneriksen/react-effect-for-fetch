

function AdviceSlip ({slip, fetch}) {
    return (
        <>
        <h2>Advice Section</h2>
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{slip.advice}</p>
            <button onClick={fetch}>Get More Advice</button>
            <button>Save to Favourties</button>
        </section>
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
            <li>Measure twice, cut once.</li>
            <li>Don't let the bastards grind you down.</li>
            <li>Always the burrito.</li>
            </ul>
        </section>
        </>
    )
}

export default AdviceSlip