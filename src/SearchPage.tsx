import React, { useEffect, useState } from 'react';
import { Form, InputGroup, Pagination, Spinner } from 'react-bootstrap';
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
import { isMobile } from 'react-device-detect'
import { pbpClient } from './capabilities/pbpClient';
import axios from 'axios';
import { OrgCard } from './OrgCard';
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { useHistory } from 'react-router';
import { Img } from './Img';
import { OrgName } from './OrgName';

const searchOrganisations = async (value: string, pageSize = 25, url?: string) => {
  const { data } = await (url ? axios.get(
    url,
    {
      headers: {
      authorization: process.env.REACT_APP_PBP_PK
    }
  }
  ) : pbpClient.get('organisations',
  {
   params: {
      pageSize,
      ...value && {
        query: value
      },
      ...process.env.REACT_APP_ENVIRONMENT === 'production' && {
        category: ["category_000000CUpmzeSdAYRMEHaVUlWKPCq"]
      }
    }
  }))
  return data
}

export const SearchPage = () => {

  const { push } = useHistory()

  const [searchData, setSearchData] = useState<any[]>([])
  const [searchLoading, setSearchLoading] = useState<boolean>(false)

  const search = async (value: string) => {
    try {
      setSearchLoading(true)
    const { data } = await searchOrganisations(value, 5)
    setSearchData(data)
    setSearchLoading(false)
    } catch (e) {
    setSearchLoading(false)
    console.log('error', e)
    }
  }

  const [data, setData] = useState<any[]>([])
  const [pagination, setPagination] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(true)
  const [value, setValue] = useState('')
  const [results, setResults] = useState()
  const [accurate, setAccurate] = useState(false)
  const x = async (value: string, url?: string) => {
    try {
    setLoading(true)
    const { data, _links, totalResults, exhaustiveTotalResults } = await searchOrganisations(value, 25, url)
    setAccurate(exhaustiveTotalResults)
    setPagination(_links)
    setData(data)
    setResults(totalResults)
    setLoading(false)
    } catch (e) {
    setLoading(false)
    console.log('error', e)
    }
  }

  useEffect(() => {
    x(value)
  }, [])

  return (
    <Container>
      <Row style={{ marginBottom: 50 }}>
        <Col>
        <form onSubmit={(e) => {
          e.preventDefault()
          x(value)
        }}>
        <InputGroup className="mb-3">
        <AsyncTypeahead
          // onInputChange={(e) => setValue(e)}
          inputProps={{
            style: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0
            }
          }}
          style={ isMobile ? {
            flex: 'auto',
            fontSize: 16
          }: {
            flex: 'auto'
          }}
          filterBy={() => true}
          id="async-example"
          isLoading={false}
          labelKey="name"
          minLength={1}
          onSearch={(e) => {
            setValue(e)
            search(e)
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              x(value)
            }
          }
          }
          options={searchData}
          placeholder={isMobile ? "Search nonprofit name" : "Search by nonprofit name or number"}
          renderMenuItemChildren={(option: any) => (
            <div
            key={option.id}
            onClick={(e) => {
              e.preventDefault()
              push(`/org/${option.id}`)
            }}>
              {option.logo ? <Img
                src={option.logo}
                styles={{
                  height: '24px',
                  marginRight: '10px',
                  width: '24px',
                }}
              /> : 
              <OrgName
                name={option.name}
                onClick={() => {}}
                styles={{
                  height: '24px',
                  marginRight: '10px',
                  width: '24px',
                  fontSize: 10,
                  display: 'inline-flex'
                }}
              />}
              <span>{option.name}</span>
            </div>
          )}
        />
        {/* <Form.Control
          placeholder="Search by nonprofit name or number"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        /> */}
        <Button
        theme="light"
        id="button-addon2" style={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderColor: '#becad6',
          borderLeft: 0,
          fontWeight: 'bold'
        }}
        onClick={() => x(value)}
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
      {process.env.REACT_APP_EXAMPLE_ID && <Col style={{ marginBottom: 40 }} sm={6} md={4}>
      <OrgCard
        logo="https://wbg.org.uk/wp-content/uploads/2020/04/Oxfam-Logo.jpg"
        name="PROMOTED CHARITY: oxfam"
        description="To prevent and relieve poverty and to protect the vulnerable, including through humanitarian intervention; . To advance sustainable development; To promote human rights and equality and diversity, in particular where to do so contributes to the prevention and relief of poverty;"
        countryCode="GBR"
        address="2700 John Smith Drive"
        id={process.env.REACT_APP_EXAMPLE_ID!}
      />
      </Col>}
        {data.map(a => (<Col style={{ marginBottom: 40 }} sm={6} md={4}>
          <OrgCard {...a}  />
        </Col>))}
        </>}
      </Row>
      <Row>
        <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%'
        }}>
          {pagination.last && pagination.prev && !pagination.next ?
          <p style={{ fontSize: 15 }}>End of results</p>
          :<p style={{ fontSize: 15 }}>{accurate ? '' : 'at least'} {results} results</p>
}
        {!(pagination.last && pagination.prev && !pagination.next) && <Pagination style={{
          fontSize: '25px',
          display: 'flex'
        }}>
          {pagination.next && pagination.first && <Pagination.First
            disabled={!pagination.prev}
            onClick={() => x(value, pagination.first)}
          />}
          {pagination.prev && <Pagination.Prev
            onClick={() => x(value, pagination.prev)}
          />}
          {pagination.next && <Pagination.Next
            onClick={() => x(value, pagination.next)}
          />}
          {(pagination.prev || pagination.next) && pagination.last && <Pagination.Last
            disabled={!pagination.next}
            onClick={() => x(value, pagination.last)}
          />}
        </Pagination>
}
        </div>
      </Row>
    </Container>
  )
}

