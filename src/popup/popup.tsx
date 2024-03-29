import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import './popup.css';

const domNode = document.createElement('div');
domNode.id = 'root';
document.body.appendChild(domNode);
const root = createRoot(domNode);

const test = <img src="icon.png" alt="" />;

root.render(test);
