import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'

export default function Repositories({ lists }) {

  return (
    <>
      {lists.map((e) => (
        <ListGroup variant="flush" key={e.id}>
          <ListGroup.Item >
            {e.full_name}
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  )
}