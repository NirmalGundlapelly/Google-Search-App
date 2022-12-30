// Write your code here
import './index.css'

const SuggesitionItem = props => {
  const {suggestionItem, onChangeText} = props
  const {id, suggestion} = suggestionItem

  const onClickButton = () => {
    onChangeText(suggestion)
  }

  return (
    <li className="suggestionItem">
      <div className="textContainer">
        <p>{suggestion}</p>
      </div>
      <button type="button" onClick={onClickButton}>
        <img
          alt="arrow"
          className="icon-arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggesitionItem
