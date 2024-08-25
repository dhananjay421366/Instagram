import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Signup } from './components/Signup.jsx'
import { Login } from './components/Login.jsx'
import { Home } from './pages/Home.jsx'
import { Toaster } from 'sonner'
import { Layout } from './components/Layout.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { PersistGate } from "redux-persist/integration/react";
import persistStore from 'redux-persist/es/persistStore'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="register" element={<Signup />} />

//       <Route path="login" element={<Login />} />

//     </Route>
//   )
// );
let persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate  loading={null} persistor={persistor}>
        {/* <RouterProvider router={router} /> */}
        <App />
        <Toaster />
      </PersistGate>

    </Provider>



  </StrictMode>,
)
