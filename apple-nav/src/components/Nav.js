import React from 'react'

import { SubNav } from './NavStyles'

const Nav = props => {

  const item = props.items.find(item => {
    return item.name === props.match.params.navItemName
  })

  return (
    <SubNav>


      {item.subLinks.map(subLink => {
        return (
          <div key={subLink.name}>
            <img alt={`${subLink.name}`} src={subLink.img} />
            <p>{subLink.name}</p>
          </div>
        )
      })}

    </SubNav>
  )
}

export default Nav
