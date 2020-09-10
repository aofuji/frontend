import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Service from '../../service'

import Container from 'react-bootstrap/Container'

import './index.css'
import { Row } from 'react-bootstrap'

export default function Details() {

  const { user } = useParams()

  const [login, setLogin] = useState()
  const [url, setUrl] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    async function getUser() {
      setIsLoading(true)
      const { data } = await Service.get(`/users/${user}`)

      setLogin(data.login)
      setUrl(data.url)

      setIsLoading(false)

    }

    getUser()

  }, [])

  if (isLoading) {
    return (
      <>
        <Header />
        <div>carregando</div>
      </>

    )
  }

  return (
    <>
      <Header />
      <Container >
        <Row className="mt-5 justify-content-md-center">
          <div>
            <p>Login: {login}</p>
            <p>Url: {url}</p>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  )

}