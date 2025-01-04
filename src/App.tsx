import React from 'react';
import { RouterProvider } from 'react-router-dom';
import '@scss/styles.scss';

import router from './routing/router';

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
