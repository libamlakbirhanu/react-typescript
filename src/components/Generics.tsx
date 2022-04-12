import React, { ReactNode } from 'react'

type Props<T> = {
    items: T[],
    render: (item: T) => ReactNode
}

const Generics = <T, >({items, render}: Props<T>) => {
  return (
    <ul>
        {
            items.map((item, index) => <div key={index}>{render(item)}</div>)
        }
    </ul>
  )
}

export default Generics