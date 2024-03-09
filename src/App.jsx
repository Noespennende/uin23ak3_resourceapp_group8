import React from 'react';
import '../CSS/style.css'
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Nav from './components/nav';
import { resources } from './assets/ressurser'
import Resources from './components/Resources';

function App() {
  
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Navigate to = '/HTML'/>}/>
          <Route path='/HTML' element ={<Resources resources={resources} category={"html"}/>}/>
          <Route path='/CSS' element ={<Resources resources={resources} category={"css"}/>}/>
          <Route path='/JavaScript' element ={<Resources resources={resources} category={"JavaScript"}/>}/>
          <Route path='/React' element ={<Resources resources={resources} category={"React"}/>}/>
          <Route path='/Sanity-and-headless-CMS' element ={<Resources resources={resources} category={"Sanity and headless CMS"}/>}/>
          {/*<Route path="/*" element={<Resources resources={resources}/>} />
          <Route path=":slug" element={<Resources resources={resources}/>} />*/}
        </Routes>
      </main>
    </div>
  );
}

export default App;
