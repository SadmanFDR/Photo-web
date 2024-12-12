
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home'

function App() {

  const myRout = createBrowserRouter(
    createRoutesFromElements(
     
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}/>
        </Route>

    )
  )

  return (
    <>
    <RouterProvider router={myRout}/>
    </>
  )
}

export default App
