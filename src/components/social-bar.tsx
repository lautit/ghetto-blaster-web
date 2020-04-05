/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

const SocialContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin: 25px 20% 0;
  border-bottom: 1px white solid;
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
  background: transparent;
`

const Attributions = styled.a`
  text
`

const SocialBar = () => {
  const socialNetworks = [
    {
      id: 'youtube',
      link: 'https://www.youtube.com/ghettoblaster',
    },
    {
      id: 'facebook',
      link: 'https://www.facebook.com/ghettoblasterfamilia',
    },
    {
      id: 'instagram',
      link: 'https://www.instagram.com/ghettoblasterfamilia',
    },
  ]

  return (
    <SocialContainer>
      {socialNetworks.map(({ id, link }) => {
        return (
          <SocialLink key={id} href={link} target="_blank">
            <SocialIcon></SocialIcon>
          </SocialLink>
        )
      })}
    </SocialContainer>
  )
}

export default SocialBar
