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

  & .gatsby-image-wrapper {
    height: 100%;
  }

  & img {
    object-fit: cover;
  }
`

const LogoContainer = styled.div`
  background: transparent;
  height: 70vh;
  width: 100vw;

  & .gatsby-image-wrapper {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    max-width: 80vw;
    max-height: 60vh;

    @media (max-width: 500px) {
      max-width: 90vw;
    }
  }
`

const PromotionalLandingPage = ({ data }) => {
  const { logo, background } = data

  return (
    <Layout>
      <Inner>
        <BgContainer>
          <Img fluid={background.childImageSharp.fluid} />
        </BgContainer>
        <Menu />
        <LogoContainer>
          <Img
            imgStyle={{
              objectFit: 'contain',
              objectPosition: '50% 50%',
            }}
            fluid={logo.childImageSharp.fluid}
          />
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
export const fixedLogo = graphql`
  fragment fixedLogo on File {
    childImageSharp {
      fixed(width: 480, height: 530) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const fluidLogo = graphql`
  fragment fluidLogo on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query getImagesForLanding {
    background: file(relativePath: { eq: "bg_texture_hero.png" }) {
      ...fluidImage
    }
    logo: file(relativePath: { eq: "logo-negative.png" }) {
      ...fluidLogo
    }
  }
`

export default PromotionalLandingPage
