import React, { useState } from 'react'

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

// service
import Service from '../../service/index'

import Repositories from '../../components/repositories'
import Users from '../../components/users'
import Starred from '../../components/starred'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Loading from '../../components/loading'

function Home() {
  const [user, setUser] = useState()
  // eslint-disable-next-line camelcase
  const [users, setUsers] = useState([])
  const [repositories, setrepositories] = useState([])
  const [starred, setStarred] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  async function getUsers() {

    // eslint-disable-next-line camelcase
    try {
      // eslint-disable-next-line camelcase
      setIsLoading(true)
      const { data } = await Service.get(`/users/${user}`)

      setUsers([data])
      setrepositories([])
      setStarred([])

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  async function getRepo() {
    try {
      setIsLoading(true)
      const { data } = await Service.get(`/users/${user}/repos`)

      setrepositories(data)
      setUsers([])
      setStarred([])
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  async function getStarred() {
    try {
      setIsLoading(true)
      const { data } = await Service.get(`/users/${user}/starred`)

      setStarred(data)
      setUsers([])
      setrepositories([])
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Row className="mt-2 justify-content-md-center">
          <Col sm={4}>
            <InputGroup className="mb-3" >
              <FormControl
                placeholder="Preencha o campo"
                onChange={(e) => setUser(e.target.value)}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={getUsers}>Buscar</Button>
              </InputGroup.Append>
            </InputGroup>

            <Button variant="light" className="btn-rd mr-2" onClick={getRepo}>Repositorios</Button>
            <Button variant="light" className="btn-rd" onClick={getStarred}>Starred</Button>

          </Col>
        </Row>

        <Row className="mt-5">
          <Col sm={12}>
            <Loading isLoading={isLoading} />
            {
              !isLoading ? <>
                            <Repositories lists={repositories} />
                            <Users lists={users} />
                            <Starred lists={starred} />
                          </> : <></>

            }

          </Col>
        </Row>

      </Container>
      <Footer />
    </>
  )
}

export default Home
