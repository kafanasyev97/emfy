import axios from 'axios'
import { URL, CODE } from './constants'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getLeads = async () => {
      const headers = {
        Authorization: `Bearer ${CODE}`,
      }
      try {
        const response = await axios.get(URL, { headers })
        setData(response.data._embedded.leads)
        console.log('1111', response.data._embedded.leads)
      } catch (error) {
        throw new Error(error)
      }
    }
    getLeads()
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el) => {
          return (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.price}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default App
