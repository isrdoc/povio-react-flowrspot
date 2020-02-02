import React from 'react'
import Button from '@material-ui/core/Button'
import { NavLink, useLocation } from 'react-router-dom'

import colors from '../../styles/colors.scss'

export default function ButtonLink({ classes, icon: Icon, label, linkTo }) {
  const { link, icon, button } = classes
  const location = useLocation()
  const isActive = linkTo === location.pathname

  return (
    <NavLink to={linkTo} className={link}>
      {Icon && <Icon className={icon} />}

      <Button className={button}>
        <span style={{ color: isActive ? colors.orange : null }}>{label}</span>
      </Button>
    </NavLink>
  )
}
