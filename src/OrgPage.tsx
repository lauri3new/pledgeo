import React, { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router"
import { isMobile } from 'react-device-detect'
import { Button, Col, Container, Row } from "shards-react"
import { pbpClient } from "./capabilities/pbpClient"
import { pClient } from "./capabilities/pClient"
import { Donations } from "./Donations"
import { Img } from "./Img"
import { OrgName } from "./OrgName"


export const OrgPage = () => {
  const [loading, setLoading] = useState(false)
  const [loadingDonate, setLoadingDonate] = useState(false)
  const { id } = useParams<{ id: string }>()

  const [data, setData] = useState<any>([])
  const [value, setValue] = useState('')
  useEffect(() => {
    const x = async () => {
      try {
      setLoading(true)
      const { data } = await pbpClient.get(`organisations/${id}`)
      setData(data.data)
      setLoading(false)
      } catch (e) {
      setLoading(false)
      console.log('error', e)
      }
    }
    x()
    return () => {
      setLoadingDonate(false)
    }
  }, [])

  if (loading) {
    return (<div style={{
      width: '100%',
      marginLeft: '50%'
    }}><Spinner animation="border" role="status"/></div>)
  }

  return (
    <Container>
    <Row>
    <Col md={4} sm={12} style={ isMobile ? { marginTop: 20 } : {}}>
      {!data.logo ? <OrgName
        name={data.name || ''}
        onClick={() => {}}
      /> :
        <Img src={data.logo || "https://source.unsplash.com/random/" +(500 - (Math.random() * 100)).toString() + "x400/?nonprofit"} styles={{
          height: 350,
          width: 350,
          objectFit: 'contain'
        }} />}
      </Col>
      <Col md={8} sm={12}>
        <h1 style={{
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }}>{data.name}</h1>
        <p>{data.countryCode} - {data.address}</p>
        <h3>Mission</h3>
        <p>{data.description}</p>
        <Button
          style={isMobile ? { width: '100%', fontWeight: 'bold' } : { width: 200, fontWeight: 'bold' }}
          theme="success"
          disabled={loading}
          onClick={() => {
            setLoadingDonate(true)
            pClient.post('donation-sessions', {
              organisationId: id,
              successUrl: `${window.location.origin}/org/${id}`,
              metadata: {
                test: 'this is some test metadata'
              }
            })
            .then(({ data }) => {
              window.location.href = data.data.url
              setLoadingDonate(false)
            })
            .catch(e => {
              setLoadingDonate(false)
              console.log(e)
            })
          }}
        >{ loadingDonate ? <Spinner style={{
          width: '1rem',
          height: '1rem'
        }} animation="border" role="status"/> : "Donate" }</Button>
      </Col>
    </Row>
    <Row>
      <Col sm={12} style={{ textAlign: 'center', marginTop: 20 }}>
        <Donations id={id} />
      </Col>
    </Row>
    </Container>
  )
}