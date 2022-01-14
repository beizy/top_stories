import "../styles/App.css"
import getArticles from "./apiCalls"
import { useState, useEffect } from "react"
import Header from "./Header"
import Newslist from "./Newslist"
import SectionSelector from "./SectionSelector"

function App() {
  const [articles, setArticles] = useState([])
  const [errorMsg, setErrorMsg] = useState("")
  const [section, setSection] = useState(null)

  useEffect(() => {
    getArticles(section)
      .then(data => {
        setArticles([...data.results])
        console.log(data.results)
      })
      .catch(error => setErrorMsg(error))
  }, [section])

  const getSection = section => {
    setSection(section)
  }

  return (
    <div className="App">
      <Header />
      <SectionSelector getSection={getSection} />
      <Newslist allArticles={articles} />
    </div>
  )
}

export default App
