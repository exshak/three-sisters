const _ = require('lodash')
const path = require('path')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const { data, errors } = await graphql(`
    query {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              template
              title
            }
            fields {
              slug
              contentType
            }
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  const mdFiles = data.allMarkdownRemark.edges
  const contentTypes = _.groupBy(mdFiles, 'node.fields.contentType')

  _.each(contentTypes, (pages, contentType) => {
    const pagesToCreate = pages.filter(page =>
      // get pages with template field
      _.get(page, 'node.frontmatter.template')
    )
    if (!pagesToCreate.length) return console.log(`Skipping ${contentType}`)

    console.log(`Creating ${pagesToCreate.length} ${contentType}`)

    pagesToCreate.forEach(({ node: { id, fields, frontmatter } }) => {
      createPage({
        path: fields.slug,
        component: path.resolve(
          `src/templates/${String(frontmatter.template)}/index.tsx`
        ),
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ actions: { createNodeField }, getNode, node }) => {
  fmImagesToRelative(node) // convert frontmatter images

  if (node.internal.type === 'MarkdownRemark') {
    let slug
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)

    if (_.get(node, 'frontmatter.slug')) {
      slug = `/${node.frontmatter.slug.toLowerCase()}/`
    } else if (
      // home page gets root slug
      parsedFilePath.name === 'home' &&
      parsedFilePath.dir === 'pages'
    ) {
      slug = '/'
    } else if (_.get(node, 'frontmatter.title')) {
      slug = `/${_.kebabCase(parsedFilePath.dir)}/${_.kebabCase(
        node.frontmatter.title
      )}/`
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    createNodeField({
      node,
      name: 'contentType',
      value: parsedFilePath.dir,
    })
  }
}

// module.exports.resolvableExtensions = () => ['.json']
