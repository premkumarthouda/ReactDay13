// Write your code here
// Write your code here
import './index.css'
const AppointmentItem = props => {
  const {itemDetails, onClickStar} = props
  const {id, title, date, isStarred} = itemDetails
  const path = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const onClickedStar = () => {
    onClickStar(id)
  }
  return (
    <li className="list-Items">
      <div className="mini-container">
        <div className="input-container">
          <p className="head-1">{title}</p>
          <p className="para1">Date: {date}</p>
        </div>
        <button
          className="star-icon"
          data-testid="star"
          onClick={onClickedStar}
        >
          <img src={path} alt="star" />
        </button>
      </div>
    </li>
  )
}
export default AppointmentItem
