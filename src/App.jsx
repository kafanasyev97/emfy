import axios from 'axios'
import { URL, CODE } from './constants'
import { useEffect, useState } from 'react'
import './App.css'
import ExpandedCard from './ExpandedCard'

function App() {
  const [data, setData] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)
  const [loading, setLoading] = useState(false)
  const [expandedCardData, setExpandedCardData] = useState(null)

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
        } catch (error) {
          throw new Error(error)
        }
      }
    }
    getLeads()
  }, [])

  const handleCardClick = async (leadId) => {
    if (selectedCard === leadId) {
      setSelectedCard(null)
      setExpandedCardData(null)
      return
    }

    setSelectedCard(leadId)
    setLoading(true)

    try {
      const response = await axios.get(`${URL}/${leadId}`, {
        headers: {
          Authorization: `Bearer ${CODE}`,
        },
      })
      setExpandedCardData(response.data)
    } catch (error) {
      console.error('Ошибка при загрузке данных сделки:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Бюджет</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <div className="loading">Загрузка данных...</div>
          ) : (
            data.map((el) => {
              return (
                <>
                  <tr
                    key={el.id}
                    className="lead"
                    onClick={() => handleCardClick(el.id)}
                  >
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.price}</td>
                  </tr>

                  {selectedCard === el.id && (
                    <tr>
                      <td className="loading-width">
                        {loading ? (
                          <div>Загрузка...</div>
                        ) : (
                          expandedCardData && (
                            <ExpandedCard expandedCard={expandedCardData} />
                          )
                        )}
                      </td>
                    </tr>
                  )}
                </>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App
