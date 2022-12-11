import './index.css'

const TabItem = props => {
  const {eachTabItem, onClickTabItem, isTabActive} = props
  const {tabId, displayText} = eachTabItem

  const onClickTabCategory = () => {
    onClickTabItem(tabId)
  }

  const activeTabStyling = isTabActive ? 'active-tab' : ''

  return (
    <li className="list-container-item">
      <button
        type="button"
        className={`tab-button ${activeTabStyling}`}
        onClick={onClickTabCategory}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
