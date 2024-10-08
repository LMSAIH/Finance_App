import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import { Provider } from 'react-redux';
import { store } from './redux/redux-store';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <Provider store = {store}>
      <App />  
    </Provider>
    </AuthContextProvider>
  </React.StrictMode>

);
   