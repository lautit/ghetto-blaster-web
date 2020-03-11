import React from 'react'
import { graphql } from 'gatsby'
import Inner from '../elements/inner'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Menu from '../components/menu'

const PromotionalLandingPage = ({ data }) => {
  const { isotype } = data

  return (
    <Layout>
      <Inner sx={{ textAlign: `center` }}>
        <Menu />
        <Img fixed={isotype.childImageSharp.fixed} />
      </Inner>
    </Layout>
  )
}

export const pageQuery = graphql`
  query getImagesForLanding {
    isotype: file(relativePath: { eq: "isotype.png" }) {
      childImageSharp {
        fixed(width: 433, height: 234) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    isologotype: file(relativePath: { eq: "isologotype.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    texture: file(relativePath: { eq: "bg_texture_hero.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default PromotionalLandingPage
