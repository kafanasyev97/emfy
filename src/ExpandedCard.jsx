const ExpandedCard = ({ expandedCard }) => {
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
    <div>
      <p>
        <strong>ID:</strong> {expandedCard.id}
      </p>
      <p>
        <strong>Название:</strong> {expandedCard.name}
      </p>
      <p>
        <strong>Дата создания:</strong> {formatDate(expandedCard.created_at)}
      </p>
      <p className="expanded-lead">
        <strong className="expanded-lead__key">Статус задачи:</strong>
        <svg width="20" height="20">
          <circle
            cx="10"
            cy="10"
            r="10"
            fill={getTaskColor(expandedCard.closest_task_at)}
          />
        </svg>
      </p>
    </div>
  )
}

export default ExpandedCard
