import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import AuthProvider from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';
import ClassroomProvider from './providers/ClassroomProvider';
import EnrollmentProvider from './providers/EnrollmentProvider';

initMiddleware();
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
        <ClassroomProvider>
          <EnrollmentProvider>
            <BrowserRouter>
              <App />   
            </BrowserRouter>
          </EnrollmentProvider>
      </ClassroomProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();