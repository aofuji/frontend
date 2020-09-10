import React from 'react'



export default function Repositories({ lists}) {

  return (
  <>
    {lists.map((e) => (
      <div key={e.id}>

       {e.full_name}

      </div>
    ))}
  </>
  )
}