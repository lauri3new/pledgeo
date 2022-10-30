import { Col, Container, Row } from "shards-react";
import { isMobile } from 'react-device-detect'
import { IoEarth } from 'react-icons/io5'

export const Logo = () => (
  <Container>
  <Row style={{ textAlign: 'center', padding: 50 }}>
    <Col>
    <h1 style={{ fontSize: isMobile ? 50 : 70, fontWeight: 'bold', lineHeight: 1.2}}>
    <span style={{color: '#535353'}}>P</span>
    <span style={{color: '#535353'}}>l</span>
    <span style={{color: '#535353'}}>e</span>
    <span style={{color: '#535353'}}>d</span>
    <span style={{color: 'rgb(174 70 70)'}}>g</span>
    <span style={{color: 'rgb(65 138 22)'}}>e</span>
    <span style={{color: 'rgb(91 91 255)'}}>o</span>
          <IoEarth style={{ color: '#535353' }} />
      </h1>
      <h4>
      Donate across the World
    </h4>
    </Col>
  </Row>
  </Container>
)