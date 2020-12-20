import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import './common.css'
import App from './App'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom'
//import reportWebVitals from './reportWebVitals';
const Greeting = () => {
  return React.createElement('h2', {}, 'dragon')
}
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Greeting /> */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
