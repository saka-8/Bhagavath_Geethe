import React from 'react';
import { render } from 'react-dom';
import loadable from '@loadable/component';
import { Provider } from 'react-redux';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import store from './redux';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const Quote = styled.p`
  line-height: 100vh;
  color: #ffffff;
  text-align: center;
  drop-shadow: 20px 20px 20px #ccc;
  font-size: 2rem;
  font-weight: 900;
`;

const Bootstrap = loadable.lib(() => import('bootstrap/dist/css/bootstrap.min.css'));
const Theme = loadable.lib(() => import('./scss/index.scss'));

const AppComponent = loadable(() => import('./App'), {
  fallback: <Row className="justify-content-center align-items-center">
    <Col>
      <Quote>Be the change you wish to see</Quote>
    </Col>
  </Row>
});

render(
  <Provider store={store}>
    <Bootstrap />
    <Theme />
    <AppComponent />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
