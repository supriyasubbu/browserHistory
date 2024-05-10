import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const removeHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-item-container-1">
      <div className="history-item-container-2">
        <p className="history-time">{timeAccessed}</p>
        <div className="history-item-container-3">
          <img src={logoUrl} alt="domain logo" className="history-domain" />
          <div className="history-item-container-4">
            <p className="history-title">{title}</p>

            <p className="history-domain-text">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="del-btn"
        onClick={removeHistory}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="del-icon"
        />
      </button>
    </li>
  )
}
export default HistoryItem
