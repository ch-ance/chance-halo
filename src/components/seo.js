/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet title={title} >

    <meta property="description" content={SEO.description} />
    <meta property="image" content={"https://photos.google.com/photo/AF1QipMjek-GQQfY2QP6ifrQ_wsk_SGHcdW0th8ftOJg"} />
    <meta property="og:image" content={"https://photos.google.com/photo/AF1QipMjek-GQQfY2QP6ifrQ_wsk_SGHcdW0th8ftOJg"} />
    <meta property="og:title" content={SEO.title} />
    <meta property="og:description" content={SEO.description} />
    <meta property="og:type" content={"website"} />
    {/* <meta property="" content={SEO.description} /> */}
    <meta property="twitter:description" content={metaDescription} />
    <meta property="twitter:title" content={title} />

    </Helmet>
    // <Helmet
    //   htmlAttributes={{
    //     lang,
    //   }}
    //   title={title}
    //   titleTemplate={`%s | ${site.siteMetadata.title}`}
    //   meta={[
    //     {
    //       name: `description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:title`,
    //       content: title,
    //     },
    //     {
    //       property: `og:description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:type`,
    //       content: `website`,
    //     },
    //     {
    //       name: `twitter:card`,
    //       content: `summary`,
    //     },
    //     {
    //       name: `twitter:creator`,
    //       content: site.siteMetadata.author,
    //     },
    //     {
    //       name: `twitter:title`,
    //       content: title,
    //     },
    //     {
    //       name: `twitter:description`,
    //       content: metaDescription,
    //     },
    //     {
    //       name: "og:image",
    //       content:
    //         "https://photos.google.com/photo/AF1QipMjek-GQQfY2QP6ifrQ_wsk_SGHcdW0th8ftOJg",
    //     },
    //     {
    //       name: "image",
    //       content:
    //         "https://photos.google.com/photo/AF1QipMjek-GQQfY2QP6ifrQ_wsk_SGHcdW0th8ftOJg",
    //     },
    //   ].concat(meta)}
    // />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
