import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './routes/App.jsx'
import './index.css'
import Bag from './routes/Bag.jsx'
import Home from './routes/Home.jsx'
import dashStore from './store/index.js'
import Login from './routes/Login.jsx'
import Store from './routes/Store.jsx'
import MenStore from './routes/MenStore.jsx'
import WomenStore from './routes/WomenStore.jsx'


const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <Home /> },
      { path: '/bag', element: <Bag /> },
      {
        path: '/store', element: <Store />, children: [
          { path: '/store/men', element: <MenStore /> },
          { path: '/store/women', element: <WomenStore /> },
        ]
      },
    ]
  },
  {
    path: '/login', element: <Login />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={dashStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
