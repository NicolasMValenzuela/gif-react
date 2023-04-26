import React from 'react'
import { useState } from 'react'
import { generarId } from '../helpers.js/helpers'
import { Gifcontainer } from './Gifcontainer'

export const Searchbar = () => {

    const [local, setLocal] = useState('')
    const [lista, setLista] = useState([])
    



    const handleSubmit = (e)=>{
        e.preventDefault()
        const gif = {
            nombre : local,
            id: generarId()
        }
        setLista([...lista, gif])
        setLocal('')
    }

  return (
    <>
    <form onSubmit={handleSubmit} className =' flex items-center justify-center w-screen '>
        <input  className='mt-3 p-3 border-solid border-2' type="text"
        value={local}
        onChange = {(e) => {
            setLocal(e.target.value)
        }}
        />
        <button className='mt-3 p-3 bg-indigo-700  text-white'>Search</button>
    </form>

    {lista.map((gif)=>(
        <Gifcontainer 
            nombre = {gif.nombre} 
            key = {gif.id} 
            id={gif.id}
            lista ={lista}
            setLista = {setLista}/>
    ))}
    </>
  )
}
