import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'

export default function Starred({ lists }) {
  // console.log(lista)
  return (
    <>
      {lists.map((e) => (
        <ListGroup variant="flush" key={e.id}>
          <ListGroup.Item >
            {e.url}
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  )
}