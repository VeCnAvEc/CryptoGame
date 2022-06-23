import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs: React.FC = () => {
  return (
    <ul className="breadcrumbs flex__align">
      <li>
        <Link className="hover__line" to="/">
          ID 311628
        </Link>
      </li>
      <li>Партнерский бонус</li>
    </ul>
  )
}

export default Breadcrumbs
