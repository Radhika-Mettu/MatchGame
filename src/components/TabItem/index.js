import './index.css'

const TabItem = props => {
  const {each, onClickingButton, isActive} = props
  const {tabId, displayText} = each
  const clickButton = () => {
    onClickingButton(tabId)
  }

  const activeId = isActive ? 'tab-bottom' : ''
  return (
    <li className={`listItem1 ${activeId}`}>
      <button className="button" type="button" onClick={clickButton}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
