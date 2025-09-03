// Write your code here
import {Component} from 'react'
import './index.css'
class Appointments extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="conatiner">
          <div className="app-conatiner">
            <h1>Add Appointment</h1>
            <form className="form">
              <label>TITLE</label>
              <input type="text" className="title" placeholder="TITLE" />
              <label>DATE</label>
              <input type="date" className="date" placeholder="DATE" />
              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
