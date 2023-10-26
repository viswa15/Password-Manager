import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showPasswords, deletePassword} = props
  const {id, website, username, password} = passwordDetails
  const initialLetter = website[0].toUpperCase()
  const onClickDelete = () => {
    deletePassword(id)
  }

  return (
    <li className="password-item">
      <div className="password-details-con">
        <h1 className="initial-letter">{initialLetter}</h1>
        <div className="password-details">
          <p className="website">{website}</p>
          <p className="username">{username}</p>
          {showPasswords ? (
            <p className="password">{password}</p>
          ) : (
            <img
              className="hidden-password"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
            />
          )}
        </div>
      </div>
      <button
        className="delete-btn"
        type="button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
