import axios from 'axios'
import { URL, CODE } from './constants'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    let page = 1
    let hasMoreLeads = true
    const headers = {
      Authorization: `Bearer ${CODE}`,
    }

    const getLeads = async () => {
      while (hasMoreLeads) {
        try {
          const response = await axios.get(URL, {
            headers,
            params: { limit: 3, page: page },
          })

          const newLeads = response.data._embedded.leads
          setData((prevData) => [...prevData, ...newLeads])

          if (newLeads.length < 3) {
            hasMoreLeads = false
          }
          page++

          await new Promise((resolve) => setTimeout(resolve, 1000))
          console.log(data)
        } catch (error) {
          throw new Error(error)
        }
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
        {data.length &&
          data.map((el) => {
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
