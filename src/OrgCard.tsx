import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
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

type OrgCardProps = {
  name: string
  description: string
  countryCode: string
  address: string
  id: string
  logo: string
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
  return (
  <Card style={{
    height: '500px'
  }}>
      <CardHeader style={{
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }}>{name}</CardHeader>
      <CardImg src={logo || "https://source.unsplash.com/random/500×400/?nonprofit"} style={{
        height: 250,
        objectFit: 'cover'
      }} />
      <CardBody style={{
        textOverflow: 'ellipsis',
        WebkitLineClamp: 3,
        overflow: 'hidden'
      }}>
        <CardTitle style={{
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }}>{name}</CardTitle>
        <p style={{
        maxHeight: 50,
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>{description}</p>
      </CardBody>
      <CardFooter>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button
          style={{ width: 95 }}
          disabled={loading}
          onClick={() => {
            pClient.post('donation-sessions', {
              organisationId: "staging_organisation_000000C6pZ3jKMdNUr0hMtgoYuDnf",
              successUrl: `${window.location.origin}/org/${id}`
            })
            .then(({ data }) => {
              window.location = data.data.url
            })
            .catch(e => {
              console.log(e)
            })
            setLoading(true)
          }}
        >{ loading ? <Spinner style={{
          width: '1rem',
          height: '1rem'
        }} animation="border" role="status"/> : "Donate" }</Button>
        <Button
          theme="light"
          onClick={() => {
            push(`/org/${id}`)
            window.scrollTo(0, 0)
          }}
        >
          see more
        </Button>
        </div>
      </CardFooter>
    </Card>
)
        }