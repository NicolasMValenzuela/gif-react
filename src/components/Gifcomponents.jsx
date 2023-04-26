import React from 'react'

export const Gifcomponents = ({nombre}) => {

    
  return (
    <img className='h-20 w-20 bg-white' src={nombre.img}></img>
  )
}
