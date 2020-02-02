import React from 'react'
import classNames from 'classnames'

import './style.sass'

import PageHeader from '../../components/PageHeader'
import PageMain from '../../components/PageMain'

const className = classNames({
  LayoutDefault: true,
})

const LayoutDefault = ({ routes }) => (
  <div className={className}>
    <PageHeader />
    <PageMain routes={routes} />
  </div>
)

export default LayoutDefault