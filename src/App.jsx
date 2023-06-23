//eslint-disable jsx-a11y/alt-text

import React, { Suspense, useState, useEffect } from 'react';

import './i18n'

import NavBar from './containers/navbar';

import "../src/style/global.scss"
import Content from './containers/content';

function App() {

  const [dark, setDark] = useState(true)

  function switch_dark(dark){
    if(dark === "false"){
        setTimeout(()=>{
          const elements = document.querySelectorAll('*');
          setDark(false)
          elements.forEach((element) => {
            element.classList.add('dark');
        });
        },100)
    }
  }

  useEffect(() => {
    const stored = window.localStorage.getItem('dark')
    if(stored !== null){
      if(stored === "false"){
        setDark(false)
      }else{
        setDark(true)
      }
      switch_dark(stored);
    }
  }, []);

  useEffect(() => {
    if(dark !== null){
      window.localStorage.setItem('dark', dark);
    }
  }, [dark]);

  return (
    <>
      <Suspense fallback={null}>
        <NavBar setDark={setDark} dark={dark} />
        <Content/>
      </Suspense>
    </>
  );
}

export default App;
