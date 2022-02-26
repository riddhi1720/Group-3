import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
