import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import store from './store';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <AppRouter/>
    </Provider>
  </StrictMode>,
)