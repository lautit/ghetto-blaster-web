import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Inner from '../elements/inner'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import SocialBar from '../components/social-bar'
import { spinAnimation } from '../styles/animations'

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
  height: 90vh;
  width: 100vw;

  & .gatsby-image-wrapper {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    max-width: 80vw;
    max-height: 40vh;

    @media (max-width: 500px) {
      max-width: 90vw;
    }

    & img {
      ${spinAnimation('6s')}
    }
  }
`

const PromotionalLandingPage = ({ data }) => {
  const { vinyl, background } = data

  return (
    <Layout>
      <Inner>
        <BgContainer>
          <Img fluid={background.childImageSharp.fluid} />
        </BgContainer>
        <LogoContainer>
          <Img
            imgStyle={{
              objectFit: 'contain',
              objectPosition: '50% 50%',
            }}
            fluid={vinyl.childImageSharp.fluid}
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
      fluid(maxWidth: 1660) {
        ...GatsbyImageSharpFluid
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
  query getImagesForPromoLanding {
    background: file(relativePath: { eq: "background/texture_hero.png" }) {
      ...fluidImage
    }
    vinyl: file(relativePath: { eq: "logo/vinyl-landing.png" }) {
      ...fluidLogo
    }
  }
`

export default PromotionalLandingPage
