import './App.css'
import api from './services/api'
import { useEffect, useState } from 'react'
import DividerDesktop from '../images/pattern-divider-desktop.svg'
import DividerMobile from '../images/pattern-divider-mobile.svg'

function App() {
  const [user, setUser]:any = useState({});
  
  useEffect(() => {
   handleFetch();
  }, []);

  const handleFetch = () => {
    api
    .get("/advice")
    .then( rep => setUser(rep.data.slip))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  return (
    <>
      <main>
        <span>#{user.id}</span> 
        
        <p>{user.advice}</p> 
        
        <img src={DividerDesktop} className='DDesktop' />
        <img src={DividerMobile} className='DMobile'/>

        <button onClick={handleFetch}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></button>
      </main>
    </>
  )
}

export default App
