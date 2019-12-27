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
          navigation {
            to
            text
          }
          contact {
            address
            email
            phone
          }
          social {
            # facebook
            # instagram
            # twitter
            site
            link
          }
        }
      }
    }
  `)

  return site.siteMetadata
}
