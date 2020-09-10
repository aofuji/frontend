import React from 'react'
import { Link } from 'react-router-dom'

export default function Users({ lists }) {

  return (
    <>
      {lists.map((e) => (
        <div key={e.id}>
          <Link to={`/${e.login}`}>
            {e.html_url}
          </Link>

        </div>
      ))}
    </>
  )
}