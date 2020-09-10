import React from 'react'
import { Link } from 'react-router-dom'

import ListGroup from 'react-bootstrap/ListGroup'

export default function Users({ lists }) {

  return (
    <>
    {
      lists.map((e) => (
        <ListGroup variant="flush" key={e.id}>
          <ListGroup.Item >
            <Link to={`/${e.login}`} >
              {e.html_url}
            </Link>
          </ListGroup.Item>
        </ListGroup>
      ))
    }
    </>
  )
}