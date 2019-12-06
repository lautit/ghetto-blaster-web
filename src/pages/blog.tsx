import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout>
      <div style={{ margin: '20px 0 40px' }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: '1em',
                }}
              >
                <a>{title}</a>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogPage

//export const pageQuery = graphql`
//  query {
//    site {
//      siteMetadata {
//        title
//      }
//    }
//    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
//      edges {
//        node {
//          excerpt
//          fields {
//            slug
//          }
//          frontmatter {
//            date(formatString: "MMMM DD, YYYY")
//            title
//            description
//          }
//        }
//      }
//    }
//  }
//`
