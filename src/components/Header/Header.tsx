import "./Header.css"
import {HeaderProps} from "./HeaderProps.types"

export function Header({userName, userScore}: HeaderProps) {
  return (
    <div className="header">
      <h1 className="main-heading">Motor-Head Check</h1>
      <h2>Hello, {userName}!</h2>
      <h2>Your Score: {userScore} points</h2>
    </div>
  )
}
