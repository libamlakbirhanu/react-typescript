import React, { ReactNode, useState } from 'react'

type Props = {
    children?: (input: number) => ReactNode
}

const FunctionalProps = ({children}: Props) => {
    const [state, setState] = useState<number>(1)

  return (
    <div>
        {children?.(state)}
        <button onClick={() => setState(state + 1)}>Add</button>
    </div>
  )
}

export default FunctionalProps