/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin: 5vh 25vw 0;
  border-bottom: 1px white solid;
  text-align: center;
  background: transparent;

  @media (max-width: 500px) {
    max-height: 30vh;
    margin: 0 5vw;
  }
`

const MenuTitle = styled.a`
  text-decoration: none;
  color: white;
  font-variant: all-petite-caps;
  font-size: xx-large;
  font-family: monospace;

  @media (max-width: 500px) {
    padding: 5vh 0 0;
    font-size: x-large;
  }
`

const Menu = () => {
  const titles = ['Estamos en construcción']

  return (
    <MenuContainer>
      {titles.map((title, i) => {
        return (
          <MenuTitle key={i} href="">
            {title}
          </MenuTitle>
        )
      })}
    </MenuContainer>
  )
}

export default Menu
