import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { isMobile } from 'react-device-detect';
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
import { pClient } from './capabilities/pClient';
import { Img } from './Img';
import { OrgName } from './OrgName';


type OrgCardProps = {
  name: string
  description: string
  countryCode: string
  address: string
  id: string
  logo: string
}

const styleFromName = (name: string) => {
  const colors = [{
    color: '#2020ac',
    backgroundColor: '#f0f8ff'
  },
  {
    color: '#24480f',
    backgroundColor: '#f0fff1'
  },{
    color: '#48170f',
    backgroundColor: '#fff6f0'
  },{
    color: '#535353',
    backgroundColor: '#f0f0f0'
  }]
  return colors[name.length % colors.length]
}

export const OrgCard = ({
  name,
  description,
  countryCode,
  address,
  id,
  logo
}: OrgCardProps) => {
  const [loading, setLoading] = useState(false)
  const { push } = useHistory()
  const x = useLocation()
  useEffect(() => {
    return () => {
      setLoading(false)
    }
  }, [])
  return (
  <Card style={{
    height: '500px'
  }}>
      {/* <CardHeader style={{
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }}>{name}</CardHeader> */}
      {!logo ? <OrgName
            name={name}
            onClick={() => {
              push(`/org/${id}`)
              window.scrollTo(0, 0)
            }}/>
            : <Img src={logo} styles={{
          height: 250,
          width: '100%',
          cursor: 'pointer',
          objectFit: 'contain'
        }}
      onClick={() => {
        push(`/org/${id}`)
        window.scrollTo(0, 0)
      }}
      />}
      <CardBody style={{
        textOverflow: 'ellipsis',
        WebkitLineClamp: 4,
        overflow: 'hidden'
      }}>
        <CardTitle style={{
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontSize: 18
      }}>{name}</CardTitle>
        <p style={{
        maxHeight: 80,
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        fontSize: 15
      }}>{description}</p>
      </CardBody>
      <CardFooter>
      <div style={
        isMobile? { display: 'flex', justifyContent: 'space-between', flexDirection: 'column' } :{ display: 'flex', justifyContent: 'space-between' }}>
      <Button
          theme="light"
          onClick={() => {
            push(`/org/${id}`)
            window.scrollTo(0, 0)
          }}
        >
          see more
        </Button>
      <Button
          theme="success"
          style={isMobile ? { marginTop: 10, fontWeight: 'bold' } : { width: 95, fontWeight: 'bold' }}
          disabled={loading}
          onClick={() => {
            setLoading(true)
            pClient.post('donation-sessions', {
              organisationId: id,
              successUrl: `${window.location.origin}/org/${id}`,
              metadata: {
                test: 'this is some test metadata'
              }
            })
            .then(({ data }) => {
              window.location.href = data.data.url
              setLoading(false)
            })
            .catch(e => {
              setLoading(false)
              console.log(e)
            })
          }}
        >{ loading ? <Spinner style={{
          width: '1rem',
          height: '1rem'
        }} animation="border" role="status"/> : "Donate" }</Button>
        </div>
      </CardFooter>
    </Card>
)
        }