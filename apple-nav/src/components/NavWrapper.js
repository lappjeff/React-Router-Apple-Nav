import React from 'react'

import { NavLink } from 'react-router-dom'

import { NavContainer as NavDiv, InnerNav } from './NavStyles'


const NavWrapper = props => {

  return (

    <NavDiv>
      <InnerNav>
        {props.items.map(item => {

          return <NavLink exact to={`/${item.name}`} key={item.name} item={item}>{item.name}</NavLink>
        })}
      </InnerNav>

    </NavDiv>

  )
}


export default NavWrapper
