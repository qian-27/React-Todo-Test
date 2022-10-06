import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoTable from './TodoTable';
import { render, screen, fireEvent } from'@testing-library/react';
import'@testing-library/jest-dom/extend-expect';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
