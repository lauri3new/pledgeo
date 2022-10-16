import React, { useEffect, useState } from 'react';
import { Form, InputGroup, Spinner } from 'react-bootstrap';
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
  Button
} from "shards-react";
import { pbpClient } from './capabilities/pbpClient';
import { pClient } from './capabilities/pClient';
import { OrgCard } from './OrgCard';

export const SearchPage = () => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [value, setValue] = useState('')
  const x = async () => {
    try {
    setLoading(true)
    const { data } = await pbpClient.get('organisations',
    {
      ...value && { params: {
        query: value
      } }
    }
    )
    setData(data.data)
    setLoading(false)
    } catch (e) {
    setLoading(false)
    console.log('error', e)
    }
  }
  useEffect(() => {
    x()
  }, [])

  return (
    <Container>
      <Row style={{ marginBottom: 50 }}>
        <Col>
        <form onSubmit={(e) => {
          e.preventDefault()
          x()
        }}>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search by nonprofit name or number"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button id="button-addon2" style={{
          borderTopLeftRadius: 0, borderBottomLeftRadius: 0
        }}
        // onClick={() => x()}
        >
          Search
        </Button>
      </InputGroup>
      </form>
      </Col>
      </Row>
      <Row>
        {loading ? <div style={{
          width: '100%',
          marginLeft: '50%'
        }}><Spinner animation="border" role="status"/></div> :
        <>
      <Col style={{ marginBottom: 40 }} sm={6} md={4}>
      <OrgCard
        logo="https://wbg.org.uk/wp-content/uploads/2020/04/Oxfam-Logo.jpg"
        name="PROMOTED CHARITY: oxfam"
        description="To prevent and relieve poverty and to protect the vulnerable, including through humanitarian intervention; . To advance sustainable development; To promote human rights and equality and diversity, in particular where to do so contributes to the prevention and relief of poverty;"
        countryCode="GBR"
        address="2700 John Smith Drive"
        id="staging_organisation_000000C6pZ3jKMdNUr0hMtgoYuDnf"
      />
      </Col>
        {data.map(a => (<Col style={{ marginBottom: 40 }} sm={6} md={4}>
          <OrgCard {...a}  />
        </Col>))}
        </>}
      </Row>
    </Container>
  )
}

