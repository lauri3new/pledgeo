import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Container,
  Row,
  Col
} from "shards-react";
import axios from "axios"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const client = axios.create({
  baseURL: 'https://us-central1-pledgeo.cloudfunctions.net/api/'
})

function App() {
  const [loading, setLoading] = useState(false)
  return (
    <Container>
      <Row style={{ textAlign: 'center', padding: 50 }}>
        <Col>
        <h1 style={{ fontSize: 70, fontWeight: 'bold', lineHeight: 1.2}}>Pledgeo 🌍</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
        <Card>
      <CardHeader>Card header</CardHeader>
      <CardImg src="https://wbg.org.uk/wp-content/uploads/2020/04/Oxfam-Logo.jpg" style={{
        maxHeight: 250
      }} />
      <CardBody>
        <CardTitle>Oxfam</CardTitle>
        <p>To prevent and relieve poverty and to protect the vulnerable, including through humanitarian intervention; . To advance sustainable development; To promote human rights and equality and diversity, in particular where to do so contributes to the prevention and relief of poverty;</p>
        <Button
          disabled={loading}
          onClick={() => {
            setLoading(true)
            client.post('donation-sessions', {
              organisationId: "staging_organisation_000000C6pZ3jKMdNUr0hMtgoYuDnf"
            })
            .then(({ data }) => {
              window.location = data.data.url
            })
            .catch(e => {
              console.log(e)
            })
          }}
        >Donate</Button>
      </CardBody>
      <CardFooter>
        <p>GBR</p>
        <p>2700 John Smith Drive</p>
      </CardFooter>
    </Card>
        </Col>
      </Row>
      <Row style={{ height: 200 }}>
        <Col>
          <hr style={{ marginTop: 80, paddingBottom: 20 }}/>
          <p>Pledgeo&nbsp;&nbsp;&nbsp;<strong>2022</strong></p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
