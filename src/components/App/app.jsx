import React from "react";
import './app.scss';
import HomePage from "../../Pages/homepage/HomePage";
import About from "../../Pages/about/About";
import RootRouter from '../../RootRouter';
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Login from "../../Pages/login/LoginPage";
import Register from "../../Pages/register/RegisterPage";
import Soup from "../dishes/soup/Soup";
import Swallow from "../dishes/swallow/Swallow";
import Others from "../dishes/others/Others";
import Dishes from "../dishes/Dishes";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootRouter/>}>
      <Route index element= {<HomePage />} />
      <Route path='/home' element={<HomePage />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/signIn' element={<Login />}/>
      <Route path='/signUp' element={<Register />}/>
      <Route path='/allDishes' element={<Dishes />}/>
      <Route path='/soup' element={<Soup />}/>
      <Route path='/swallow' element={<Swallow />}/>
      <Route path='/others' element={<Others />}/>
    </Route>
  ))

  return (
    <div className='layout'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;