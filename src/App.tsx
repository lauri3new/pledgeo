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
  <Logo/>
  <Switch>
    <Route path="/org/:id" component={() =><OrgPage/>} />
    <Route path="*" component={() => <SearchPage/>} />
  </Switch>
  <Container>
  <Row style={{ height: 200 }}>
        <Col>
          <hr style={{ marginTop: 80, paddingBottom: 20 }}/>
          <p>Pledgeo&nbsp;&nbsp;&nbsp;<strong>2022</strong></p>
        </Col>
      </Row>
      </Container>
  </Router>
}

export default App;
