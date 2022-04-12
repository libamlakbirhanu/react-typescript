import React, { ReactElement, ReactNode } from 'react'

type Props = {
    title: string,
    children: ReactNode
}

const Header = ({title, children}: Props): ReactElement => {
  return (
      <>
      <header>{title}</header>
      <div style={{padding: '0 2rem'}}>
      {children}
      </div>
      </>
  )
}

export default Header