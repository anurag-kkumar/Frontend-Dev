import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [data,setData]=useState([]);
   useEffect( ()=>{
  try{
      axios.get("http://localhost:8000/users")
      .then((response) => {
                setData(response.data);
                setLoading(false);})
  }
 catch(err) {
                setError(err.message);
                setLoading(false);
            };
    },[]);
  return (
   <div>
    <div>
          <table border="0" cellPadding="10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>

      </table>
           
        </div>
   </div>
  )
}

export default App
