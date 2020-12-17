import * as React from "react"
import Header from "../../components/Header"
import Home from "../../components/Home"
import Footer from "../../components/Footer"
import '../../styles/main.scss'

const IndexPage = () => {
  return (
    <main className="container">
      <Header />
      <Home />
      <Footer />
    </main>
  )
}

export default IndexPage
