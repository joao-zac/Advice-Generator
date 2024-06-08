import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

import DividerDesktop from '../public/pattern-divider-desktop.svg'
import DividerMobile from '../public/pattern-divider-mobile.svg'
import iconDice from '../public/icon-dice.svg'

type AdviceType = {
  slip: {
    id: number,
    advice: string
  }
}

function App() {
  const [advice, setAdvice] = useState<AdviceType | null>(null);

  const api = axios.create({
    baseURL: "https://api.adviceslip.com/",
  });

  const handleFetch= async () => {
    try {
      const rep = await api.get(`/advice?timestamp=${new Date().getTime()}`)
      setAdvice(rep.data)

    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <main>
        <span>#{advice?.slip.id}</span> 
        
        <p>{advice?.slip.advice}</p> 
        
        <img src={DividerDesktop} className='DDesktop' />
        <img src={DividerMobile} className='DMobile'/>

        <button onClick={handleFetch}>
          <img src={iconDice} alt="Ícone de dado" />
        </button>

      </main>
    </>
  )
}

export default App
