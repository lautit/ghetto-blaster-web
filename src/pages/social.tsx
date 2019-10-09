import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Gallery from '../components/gallery'

const SocialPage = ({ data }) => (
  <Layout>
    <Gallery posts={data.allInstagramContent} />
  </Layout>
)

export const query = graphql`
  query InstagramPosts {
    allInstagramContent {
      edges {
        node {
          link
          caption {
            text
          }
          localImage {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 500, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          images {
            standard_resolution {
              width
              height
              url
            }
            low_resolution {
              url
            }
          }
        }
      }
    }
  }
`

export default SocialPage
