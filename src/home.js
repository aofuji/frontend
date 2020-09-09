import React, { useState } from 'react';

// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

// service

import Service from './service/index';

function Home() {
  const [user, setUser] = useState();
  // eslint-disable-next-line camelcase
  const [userDetail, setList_user] = useState();

  const [login, setLogin] = useState();

  const [repo, setRepo] = useState([]);

  // user

  async function getUsers() {
    console.log(userDetail);
    // eslint-disable-next-line camelcase
    try {
      // eslint-disable-next-line camelcase
      const user_det = await Service.get(`/users/${user}`);

      setList_user(user_det.data);

      setLogin(user_det.data.login);

      console.log(userDetail);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRepo() {
    try {
      const list_repo = await Service.get(`/users/${user}/repos`);
      console.log(list_repo.data);

      setRepo(list_repo.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getStarred() {
    try {
      const starred = await Service.get(`/users/${user}/starred`);
      console.log(starred);
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <Container>
      <Row className="mt-2 justify-content-md-center">
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Preencha com nome do usuario"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setUser(e.target.value)}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={getUsers}>Buscar</Button>
            </InputGroup.Append>
          </InputGroup>

          <Button variant="primary" className="mr-2" onClick={getRepo}>Repositorio</Button>
          <Button variant="primary" onClick={getStarred}>Starred</Button>

        </Col>
      </Row>

      <Row>
        <Col>
          Lista
        </Col>
        <Col>
          {JSON.stringify(userDetail)}
        </Col>

        <Col>
          {repo.map((e) => (
            <div key={e.id}>
              {e.name}
            </div>
          ))}
        </Col>

      </Row>

    </Container>
  );
}

export default Home;
