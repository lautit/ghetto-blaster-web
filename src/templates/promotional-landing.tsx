import React from 'react'
import { graphql } from 'gatsby'
import Inner from '../elements/inner'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Menu from '../components/menu'

const PromotionalLandingPage = ({ data }) => {
  const { isotype, background } = data

  return (
    <Layout>
      <Inner sx={{ textAlign: `center` }}>
        <Menu />
        <Img fixed={isotype.childImageSharp.fixed} />
        <Img fluid={background.childImageSharp.fluid} />
      </Inner>
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1440) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 433, height: 234) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
  query getImagesForLanding {
    background: file(relativePath: { eq: "bg_texture_hero.png" }) {
      ...fluidImage
    }
    isotype: file(relativePath: { eq: "isotype.png" }) {
      ...fixedImage
    }
    isologotype: file(relativePath: { eq: "isologotype.png" }) {
      ...fixedImage
    }
  }
`

export default PromotionalLandingPage
