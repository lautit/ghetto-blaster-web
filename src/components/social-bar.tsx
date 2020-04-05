/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const SocialContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin: 25px 20% 0;
  text-align: center;
  background: transparent;
`

const SocialLink = styled.a`
  text-decoration: none;
  color: white;
  font-variant: all-petite-caps;
  font-size: xx-large;
  font-family: monospace;
`

const SocialIcon = styled.img`
  background: white;
  border-radius: 0.8rem;
  padding: 0.8rem;
`

const SocialBar = ({ data }) => {
  const { facebook, youtube, instagram, email } = data

  const socialNetworks = [
    {
      id: 'youtube',
      link: 'https://www.youtube.com/ghettoblasterfamilia',
      icon: youtube.publicURL,
      alt: 'YouTube',
    },
    {
      id: 'facebook',
      link: 'https://www.facebook.com/ghettoblasterfamilia',
      icon: facebook.publicURL,
      alt: 'Facebook',
    },
    {
      id: 'instagram',
      link: 'https://www.instagram.com/ghettoblasterfamilia',
      icon: instagram.publicURL,
      alt: 'Instagram',
    },
    {
      id: 'email',
      link: 'mailto:ghettoblasterproducciones@gmail.com',
      icon: email.publicURL,
      alt: 'E-mail',
    },
  ]

  console.log('icons: ', facebook, youtube, instagram, email)

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
  }
`

export default props => (
  <StaticQuery
    query={graphql`
      query getIconsForSocialbar {
        facebook: file(relativePath: { eq: "icon-facebook.svg" }) {
          ...svgIcon
        }
        youtube: file(relativePath: { eq: "icon-youtube.svg" }) {
          ...svgIcon
        }
        instagram: file(relativePath: { eq: "icon-instagram.svg" }) {
          ...svgIcon
        }
        email: file(relativePath: { eq: "icon-email.svg" }) {
          ...svgIcon
        }
      }
    `}
    render={data => <SocialBar data={data} {...props} />}
  />
)
