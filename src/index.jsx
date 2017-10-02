import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';


const renderApp = () => render(
  <AppContainer>
    <p>Home Page</p>
  </AppContainer>,
  document.getElementById('root'),
);

renderApp();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => renderApp());
}
