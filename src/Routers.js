import React ,{ Suspense, lazy }from 'react';
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
// import Home from "./components/pages/home";
// import Contact from "./components/pages/contact";
// import About from "./components/pages/about";

const Routers = () => {

    const Home = lazy(() => import('./components/pages/home.js'));
    const About = lazy(() => import('./components/pages/about'));
    const Contact = lazy(() => import('./components/pages/contact'));
    

     return (
<Suspense >
<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contactus' element={<Contact/>} />
</Routes> 
</Suspense>
)
}

export default Routers