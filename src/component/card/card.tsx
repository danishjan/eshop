import React, {FC} from 'react'

interface Iprops {
    children: JSX.Element|JSX.Element[];
}

export const Card :FC<Iprops> = ({children}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-6">{children}</div>
  )
}
