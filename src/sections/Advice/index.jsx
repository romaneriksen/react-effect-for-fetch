import { useEffect , useState } from "react"
import AdviceSlip from "./components/AdviceSlip"


function AdviceSection() {

  const url = "https://api.adviceslip.com/advice"
  const [data, setData] = useState(null)
  const [newAdvice, setNewAdvice] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setData(jsonData)
      console.log(jsonData)
    }
    fetchData()
  }, [newAdvice])

  const refresh = () => {
    setNewAdvice(newAdvice+1)
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {data?.slip ? <AdviceSlip slip={data.slip} fetch={refresh}/> : <p>Loading...</p>}
        {/* {data.slip.advice} */}
      </section>
      <section className="favourtite-slips-list"></section>
    </section>
  )
}

export default AdviceSection
