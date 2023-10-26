import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from './Component/PasswordItem'

class App extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordsList: [],
    showPasswords: false,
  }

  addPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newPassword = {
      id: uuidv4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    if (
      newPassword.website !== '' &&
      newPassword.username !== '' &&
      newPassword.password !== ''
    ) {
      this.setState(prevState => ({
        passwordsList: [...prevState.passwordsList, newPassword],
        websiteInput: '',
        usernameInput: '',
        passwordInput: '',
      }))
    }
  }

  onSearchWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onSearchUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onSearchPasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSearchPasswordContainerInput = event => {
    const searchValue = event.target.value
    const {passwordsList} = this.state
    const filteredPasswords = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchValue.toLowerCase()),
    )
    this.setState({
      passwordsList: filteredPasswords,
    })
  }

  onTogglePasswordsCheckBox = () => {
    this.setState(prevState => ({
      showPasswords: !prevState.showPasswords,
    }))
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const filteredPasswords = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: filteredPasswords})
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordsList,
      showPasswords,
    } = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          alt="app logo"
          className="password-logo"
        />
        <div className="main-container user-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            className="password-manager-sm-image"
            alt="password manager"
          />
          <div className="input-description-container">
            <h1 className="input-container-heading">Add New Password</h1>
            <form>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                  className="input-logo"
                  alt="website"
                />
                <input
                  className="input-element"
                  type="text"
                  placeholder="Enter Website"
                  value={websiteInput}
                  onChange={this.onSearchWebsiteInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  className="input-logo"
                  alt="username"
                />
                <input
                  className="input-element"
                  type="text"
                  placeholder="Enter Username"
                  value={usernameInput}
                  onChange={this.onSearchUsernameInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  className="input-logo"
                  alt="password"
                />
                <input
                  className="input-element"
                  type="password"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={this.onSearchPasswordInput}
                />
              </div>
              <div className="btn-con">
                <button
                  className="add-btn"
                  type="submit"
                  onClick={this.addPassword}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="password-manager-md-image"
            alt="password manager"
          />
        </div>
        <div className="main-container passwords-container">
          <div className="passwords-header-container">
            <div className="passwords-header-details-container">
              <h1 className="passwords-header-heading">Your Passwords</h1>
              <p className="passwords-count">{passwordsList.length}</p>
            </div>
            <div className="password-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                className="search-logo"
                alt="search"
              />
              <input
                className="search-input-element"
                type="search"
                placeholder="Search"
                onChange={this.onSearchPasswordContainerInput}
              />
            </div>
          </div>
          <hr className="break-line" />
          <div className="tick-box-input-container">
            <input
              type="checkbox"
              id="check"
              className="checkbox"
              onChange={this.onTogglePasswordsCheckBox}
            />
            <label htmlFor="check" className="checkbox-label">
              Show Passwords
            </label>
          </div>
          {passwordsList.length > 0 ? (
            <ul className="passwords-list">
              {passwordsList.map(each => (
                <PasswordItem
                  key={each.id}
                  passwordDetails={each}
                  deletePassword={this.deletePassword}
                  showPasswords={showPasswords}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                className="no-password-image"
                alt="no passwords"
              />
              <p className="passwords-header-heading">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
