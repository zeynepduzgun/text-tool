import React from 'react';
import ReactDOM from 'react-dom';
import ToolMenu from './ToolMenu';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToolMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});