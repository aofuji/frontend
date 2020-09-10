import React from 'react'

export default function Starred({ lists }) {
  // console.log(lista)
  return (
  <>
    {lists.map((e) => (
      <div key={e.id}>
        {e.url}
      </div>
    ))}
  </>
  )
}