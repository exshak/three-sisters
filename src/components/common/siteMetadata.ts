import { graphql, useStaticQuery } from 'gatsby'

export const SiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          slogan
          author
          contact {
            address
            email
            phone
          }
          social {
            site
            link
          }
        }
      }
    }
  `)

  return site.siteMetadata
}

export const query = graphql`
  fragment Meta on MarkdownRemark {
    frontmatter {
      meta {
        title
        description
      }
    }
  }
`
