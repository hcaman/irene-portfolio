/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useLayoutData } from '../hooks/useLayoutData'

import Header from './header'
import Navigation from './navigation'
import Footer from './footer'
import '../scss/style.scss'

const Layout = ({ children }) => {
  const data = useLayoutData()
  const titlePage = data.datoCmsSite.globalSeo?.siteName || data.site.siteMetadata?.title
  
  return (
    <>
      <Header siteTitle={ titlePage || `Title`} />
      <Navigation />
      {children}
      <Footer siteTitle={ titlePage || `Title`} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
