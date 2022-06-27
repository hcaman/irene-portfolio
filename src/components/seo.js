/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useSeoData } from '../hooks/useSeoData'

function Seo({ description, lang, meta, title }) {
  const { site, datoCmsSite } = useSeoData()
  
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = datoCmsSite.globalSeo.siteName || site.siteMetadata?.title
  const mainTitle = title || datoCmsSite.globalSeo.siteName

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={mainTitle}
      titleTemplate={defaultTitle ? `%s / ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: mainTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: mainTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      bodyAttributes={{
        class: 'new-class-for-body',
        'data-spy': 'scroll',
        'data-target': '.navbar',
        'data-offset': '51',
      }}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  bodyAttributes: {},
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  bodyAttributes: PropTypes.object,
}

export default Seo
