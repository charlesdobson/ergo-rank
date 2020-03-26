import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('../../src/styles.less', () => jest.fn());

it('Renders App without crashing ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
