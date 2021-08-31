import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App.jsx';
import './index.css';

const RenderApp = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.render(<RenderApp />, document.getElementById('root'));
