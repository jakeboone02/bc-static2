import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import { HashRouter as Router, Route } from 'react-router-dom';
import { APP_NAME } from '../constants/config';
import recipes from '../constants/dataObject';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import '../styles/main.scss';

const App: React.FC = () => {
  const recipeArray = Object.keys(recipes).map(k => recipes[k]);
  return (
    <DocumentTitle title={APP_NAME}>
      <Router>
        <Row>
          <Col sm={{ span: 8, order: 2 }}>
            <Route exact path={'/'} component={Recipe} />
            <Route path={'/:key'} component={Recipe} />
          </Col>
          <Col sm={{ span: 4, order: 1 }}>
            <RecipeList recipes={recipeArray} />
          </Col>
        </Row>
      </Router>
    </DocumentTitle>
  );
};

export default App;
