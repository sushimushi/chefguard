import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactDOM from 'react-router-dom'
// import { store } from './redux/App/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   {/* <React.StrictMode> */}
    {/* <Provider store={store}>  */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </Provider> */}
   {/* </React.StrictMode> */}
  </>
)