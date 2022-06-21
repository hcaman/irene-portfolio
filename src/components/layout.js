/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import {useLayoutData} from '../hooks/useLayoutData';

import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
import "../scss/style.scss"

const Layout = ({ children }) => {
  const data = useLayoutData();

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Navigation />
        {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
