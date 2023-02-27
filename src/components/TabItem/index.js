// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTab} = props
  const {tabId, displayText} = tabDetails
  const onClickTabButton = () => {
    onClickTab(tabId)
  }
  const tabButton = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button className={tabButton} onClick={onClickTabButton} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
