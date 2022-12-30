// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onTypingInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeText = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filterdSuggestions = suggestionsList.filter(eachSug =>
      eachSug.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bgContainer">
        <div className="searchContainer">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-main-container">
            <div className="search-suggestions-container">
              <div className="input-container">
                <img
                  className="search-icon"
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search icon"
                />
                <input
                  className="search-input"
                  placeholder="Search Google"
                  type="search"
                  onChange={this.onTypingInput}
                  value={searchInput}
                />
              </div>
              <ul className="suggestions-items-container">
                {filterdSuggestions.map(eachItem => (
                  <SuggestionItem
                    suggestionItem={eachItem}
                    onChangeText={this.onChangeText}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
