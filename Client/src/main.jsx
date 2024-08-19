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
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="register" element={<Signup />} />

//       <Route path="login" element={<Login />} />

//     </Route>
//   )
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
    <Toaster />
  </StrictMode>,
)
