import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Inner from '../elements/inner'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Menu from '../components/menu'
import SocialBar from '../components/social-bar'

const BgContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-content: center;
  padding: 14% 0;
  background: transparent;
`

const PromotionalLandingPage = ({ data }) => {
  const { isologotype, background } = data

  return (
    <Layout>
      <Inner>
        <BgContainer>
          <Img fluid={background.childImageSharp.fluid} />
        </BgContainer>
        <Menu />
        <LogoContainer>
          <Img fixed={isologotype.childImageSharp.fixed} />
        </LogoContainer>
        <SocialBar />
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
      fixed(width: 316, height: 332) {
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
    isologotype: file(relativePath: { eq: "isologotype.png" }) {
      ...fixedImage
    }
  }
`

export default PromotionalLandingPage
