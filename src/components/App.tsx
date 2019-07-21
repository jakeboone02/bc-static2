import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Navbar,
  Row,
} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import { HashRouter as Router, Route } from 'react-router-dom';
import { APP_NAME } from '../constants/config';
import recipes from '../constants/dataObject';
import '../styles/main.scss';
import Recipe from './Recipe';
import RecipeList from './RecipeList';

const App: React.FC = () => {
  const recipeArray = Object.keys(recipes).map(k => recipes[k]);
  return (
    <DocumentTitle title={APP_NAME}>
      <Router>
        <Navbar bg="dark">
          <Navbar.Brand href="#">{APP_NAME}</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar>
        <Row>
          <Col sm={{ span: 8, order: 2 }}>
            <Route exact path={'/'} component={Recipe} />
            <Route path={'/:key'} component={Recipe} />
          </Col>
          <Col sm={{ span: 4, order: 1 }}>
            <RecipeList recipes={recipeArray} />
          </Col>
        </Row>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <hr />
              <p>&copy; Jake and Angie Boone 2019</p>
            </Col>
          </Row>
        </Container>
      </Router>
    </DocumentTitle>
  );
};

export default App;
