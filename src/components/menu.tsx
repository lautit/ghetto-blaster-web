/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin: 25px 20% 0;
  border-bottom: 1px white solid;
  text-align: center;
  background: transparent;
`

const MenuTitle = styled.a`
  text-decoration: none;
  color: white;
  font-variant: all-petite-caps;
  font-size: xx-large;
  font-family: monospace;
`

const Menu = () => {
  const titles = ['Nuestra Música', 'Servicios', 'Fotos', 'Videos', 'Contacto']

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
