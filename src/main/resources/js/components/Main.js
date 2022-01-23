import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import Nav from 'react-bootstrap/Nav'
import Nav from "./Navegador";

import {
    BrowserRouter,
    Routes,
    Outlet,
    Link,
    Route
  } from 'react-router-dom';
  
  import List from "./invitado/List";
  import Form from "./invitado/Form";
  import Edit from "./invitado/Edit";
  import Acerca from "./pages/Acerca";
  import Home from "./home";


const Main = () => {
	
    return (
    <>
    <hr />
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/invitado/index" element={<List/>} />
        <Route path="/invitado/form" element={<Form/>} />
        <Route path="/invitado/edit/:id" element={<Edit/>} />
		<Route path="/acerca" element={<Acerca/>} />

        <Route path="*" element={<NoMatch />} />
        </Route>
    </Routes>
    </>
   );
}

function Layout(){
    return ( 
    <>
      <div>
        <Nav />
      <hr />
        <Outlet />
      </div>
    </>  
    );
}

function NoMatch(){
    return(
        <div>
            <h3> Nada por aqui. </h3>
            <p>
                <Link to="/"> Go Home!.</Link>
            </p>
        </div>
    )
}

export default Main;

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
    document.getElementById('main'),
  );

