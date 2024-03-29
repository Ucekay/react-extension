import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';

const domNode = document.createElement('div');
domNode.id = 'root';
document.body.appendChild(domNode);


if (domNode) {
  const root = createRoot(domNode);

  const test = <p>Hello!</p>;

  root.render(test);
}
