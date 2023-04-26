import React from 'react'
import { Gifcomponents } from './Gifcomponents'
import { useState, useEffect } from 'react'
import { generarId } from '../helpers.js/helpers'



export const Gifcontainer = ({nombre, id, lista, setLista}) => {

  const [gifs, setGifs] = useState([])

  const handleErase = (id, lista) => {
    return lista.filter((elemento) => elemento.id !== id);
  }



  const api_call = async (nombre)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=LKvubT2K1yt9MEOi4fs87G47Oq9hqeHx&q=${nombre}&limit=5&offset=0&rating=g&lang=en`
  
    const respuesta =  await fetch(url)
    const {data} =  await respuesta.json()
    
    const gif = data.map(img=>({
        id:img.id,
        title: img.title,
        img: img.images.downsized_medium.url
    }))

    return gif
    
  }


useEffect(() => {
    api_call(nombre).then(gif=>setGifs(gif))
}, [])

 
  
  return (
    <div className='h-40 w-4/5 m-10'>
    <div className='p-3 grid gap-3 grid-cols-5 m-10 justify-items-center items-center bg-white shadow-lg rounded-lg'>
      {
        gifs.map((gif)=>(
          <Gifcomponents key={generarId()} nombre = {gif}/>
        ))
      } 
      <button className= 'rounded-md mt-3 p-2 bg-red-700  text-white'
      onClick={()=>setLista(handleErase(id, lista))}>Eliminar</button>
    </div>
    
    </div>
  )
}
