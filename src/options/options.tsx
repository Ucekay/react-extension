import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import './options.css';

const domNode = document.createElement('div');
domNode.id = 'root';
document.body.appendChild(domNode);
const root = createRoot(domNode);

const App: React.FC = () => {
  return (
    <div>
      <img src="icon.png" alt="" />
    </div>
  );
};

root.render(<App />);
