import './index.css'

const Header = props => {
  const {Score, Timer} = props

  return (
    <div>
      <ul className="nav-bar">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="image"
          />
        </li>
        <li className="score-bar">
          <p>Score: {Score}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="image1"
          />
          <p>{Timer} sec</p>
        </li>
      </ul>
    </div>
  )
}
export default Header
