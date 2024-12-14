import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import "./services/axios-global.js"
import {persistor, store} from './store';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <AppRouter/>
    </PersistGate>
    </Provider>
  </StrictMode>,
)