import React, { useState } from 'react';
import { IoEarth } from 'react-icons/io5'
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
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { Donations } from './Donations';
import { OrgPage } from './OrgPage';
import { Logo } from './Logo';
import { SearchPage } from './SearchPage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  
  return <Router>
    <div style={{ minHeight: '90vh' }}>
    {process.env.REACT_APP_ENVIRONMENT !== 'production' && <div style={{
      height: 30, 
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      position: 'fixed',
      width: '100vw',
      opacity: '0.6',
      fontWeight: 'bold',
      zIndex: 10000
    }}>{process.env.REACT_APP_ENVIRONMENT?.toUpperCase()}</div>}
  <Logo/>
  <Switch>
    <Route path="/org/:id" component={() =><OrgPage/>} />
    <Route path="*" component={() => <SearchPage/>} />
  </Switch>
  </div>
  <Container>
  <Row style={{ height: 200 }}>
        <Col>
          <hr style={{ marginTop: 80, paddingBottom: 20 }}/>
          <p style={{ fontWeight: '600' }}>    <span style={{color: '#535353'}}>P</span>
    <span style={{color: '#535353'}}>l</span>
    <span style={{color: '#535353'}}>e</span>
    <span style={{color: '#535353'}}>d</span>
    <span style={{color: 'rgb(174 70 70)'}}>g</span>
    <span style={{color: 'rgb(65 138 22)'}}>e</span>
    <span style={{color: 'rgb(91 91 255)'}}>o</span><IoEarth style={{ color: '#535353' }} />&nbsp;&nbsp;&nbsp;<strong>2022</strong></p>
        </Col>
      </Row>
      </Container>
  </Router>
}

export default App;
