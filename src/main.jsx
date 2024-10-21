import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp.jsx'
import Verify from './components/Verify/Verify.jsx'
import Layout from './components/Layout.jsx'
import ValidateOTP from './components/ValidateOTP/ValidateOTP.jsx'
import Interview from './components/Interview/Interview.jsx'
import JobDetail from './components/JobDetail/JobDetail.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<SignUp/>}/>
      <Route path='verify' element={<Verify/>}/>
      <Route path='validateotp' element={<ValidateOTP/>}/>
      <Route path='interview' element={<Interview/>}/>
      <Route path='jobdetail' element={<JobDetail/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
