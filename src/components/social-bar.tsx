/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const SocialContainer = styled.div`
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  background: transparent;

  & a:not(:first-of-type) {
    padding-left: 1.5rem;

    @media (max-width: 500px) {
      padding-left: 0.7rem;
    }
  }

  @media (max-width: 500px) {
    bottom: 5vh;
  }
`

const SocialLink = styled.a`
  text-decoration: none;
  color: white;
  font-variant: all-petite-caps;
  font-size: xx-large;
  font-family: monospace;
`

const SocialIcon = styled.img`
  display: block;
  width: 2.4rem;
  background: transparent;
`

const SocialBar = ({ data }) => {
  const { facebook, youtube, instagram, email } = data

  const socialNetworks = [
    {
      id: email.name,
      link: 'mailto:ghettoblasterproducciones@gmail.com',
      icon: email.publicURL,
      alt: 'E-mail',
    },
    {
      id: youtube.name,
      link: 'https://www.youtube.com/ghettoblasterfamilia',
      icon: youtube.publicURL,
      alt: 'YouTube',
    },
    {
      id: instagram.name,
      link: 'https://www.instagram.com/ghettoblasterfamilia',
      icon: instagram.publicURL,
      alt: 'Instagram',
    },
    {
      id: facebook.name,
      link: 'https://www.facebook.com/ghettoblasterfamilia',
      icon: facebook.publicURL,
      alt: 'Facebook',
    },
  ]

  return (
    <SocialContainer>
      {socialNetworks.map(({ id, link, icon, alt }) => {
        return (
          <SocialLink key={id} href={link} target="_blank">
            <SocialIcon src={icon} alt={alt} />
          </SocialLink>
        )
      })}
    </SocialContainer>
  )
}

export const svgIcon = graphql`
  fragment svgIcon on File {
    publicURL
    name
  }
`

export default (props: JSX.IntrinsicAttributes & { data: any }) => (
  <StaticQuery
    query={graphql`
      query getIconsForSocialbar {
        email: file(relativePath: { eq: "icons/social/email.svg" }) {
          ...svgIcon
        }
        youtube: file(relativePath: { eq: "icons/social/youtube.svg" }) {
          ...svgIcon
        }
        instagram: file(relativePath: { eq: "icons/social/instagram.svg" }) {
          ...svgIcon
        }
        facebook: file(relativePath: { eq: "icons/social/facebook.svg" }) {
          ...svgIcon
        }
      }
    `}
    render={data => <SocialBar data={data} {...props} />}
  />
)
