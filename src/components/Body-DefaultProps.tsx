import React, { ReactNode } from 'react'

const defaultProp = {
    content: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
}

type Props = {
    content: ReactNode
}

const Body = ({content}: Props) => {
  return (
    <div>
        {content}
    </div>
  )
}

Body.defaultProps = defaultProp

export default Body