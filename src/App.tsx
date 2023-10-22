// import { useQuery } from '@tanstack/react-query';
// import axios from "axios";
import './App.css'

// const fetchData = async () => {
//   const res = await axios.get('https://api.adviceslip.com/advice/');
//   return res.data.slip.advice;
// }

function App() {
  // const dados = useQuery('advice', fetchData)

  return (
    <>
      <main>
        <span>ADVICE #117</span>
        {/* <p> {dados} </p> */}
        <p>
          "It is easy to sit up and
          take notice, what's difficult
          is getting up and taking action."
        </p>
        
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        <button><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></button>
      </main>
    </>
  )
}

export default App
