import axios from 'axios'
import { URL, CODE } from './constants'
import { useEffect, useState } from 'react'
import './App.css'

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

  const formatDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000)
    return date.toLocaleDateString('ru-RU')
  }

  const getTaskColor = (taskDateInSeconds) => {
    const taskDate = new Date(taskDateInSeconds * 1000)
    const today = new Date()

    if (taskDate < today) {
      return 'red'
    } else if (
      taskDate.getDate() === today.getDate() &&
      taskDate.getMonth() === today.getMonth() &&
      taskDate.getFullYear() === today.getFullYear()
    ) {
      return 'green'
    } else {
      return 'yellow'
    }
  }

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
              <>
                <tr key={el.id} onClick={() => handleCardClick(el.id)}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                </tr>

                {selectedCard === el.id && (
                  <tr>
                    <td colSpan="3">
                      {loading ? (
                        <div>Загрузка...</div>
                      ) : (
                        expandedCardData && (
                          <div>
                            <p>
                              <strong>ID:</strong> {expandedCardData.id}
                            </p>
                            <p>
                              <strong>Name:</strong> {expandedCardData.name}
                            </p>
                            <p>
                              <strong>Дата создания:</strong>{' '}
                              {formatDate(expandedCardData.created_at)}
                            </p>
                            <p>
                              <strong>Task Status:</strong>{' '}
                              {expandedCardData.task_status}
                            </p>
                            <svg width="20" height="20">
                              <circle
                                cx="10"
                                cy="10"
                                r="10"
                                fill={getTaskColor(
                                  expandedCardData.closest_task_at
                                )}
                              />
                            </svg>
                          </div>
                        )
                      )}
                    </td>
                  </tr>
                )}
              </>
            )
          })}
      </tbody>
    </table>
  )
}

export default App
