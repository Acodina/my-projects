import renderer from 'react-test-renderer';
import React from 'react';
import NotFoundPage from './NotFoundPage';
import { BrowserRouter as Router } from 'react-router-dom';
describe('App Loading snapshot', () => {
  const tree = renderer.create(
    <Router>
      <NotFoundPage />
    </Router>
  );
  it('should match', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
