import React from "react"
import Home from "../components/home/Home"
import AppBar from "../components/partials/AppBar"
import Layout from "../components/partials/Layout"

const App = () => {
  const fullpageApiRef = React.useRef()

  const moveTo = location => fullpageApiRef.current.fullpageApi.moveTo(location)

  return (
    <Layout>
      <AppBar moveTo={moveTo} type={"welcome"} />
      <Home fullpageApiRef={fullpageApiRef} />
    </Layout>
  )
}

export default App
