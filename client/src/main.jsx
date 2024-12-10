import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import store, { persistor } from './Store/Store.js'; // Import persistor

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* Wrap the App in PersistGate to ensure the app waits for the persisted state */}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
