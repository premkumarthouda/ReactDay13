// Write your code here
import {format} from 'date-fns'

import {v4} from 'uuid'

import {Component} from 'react'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    appointmentsList: [],
    isStar: false,
  }

  onClickTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onClickStarred = () => {
    this.setState(prevSate => ({isStar: !prevSate.isStar}))
  }

  onClickDate = event => {
    this.setState({dateInput: event.target.value})
  }
  addAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state

    if (titleInput !== '' && dateInput !== '') {
      const formattedDate = format(new Date(dateInput), 'dd MMMM yyyy, EEEE')

      const newComment = {
        id: v4(),
        title: titleInput,
        date: formattedDate,
        isStarred: false,
      }
      this.setState(prevSate => ({
        appointmentsList: [...prevSate.appointmentsList, newComment],
        titleInput: '',
        dateInput: '',
      }))
    }
  }

  onClickStar = id => {
    this.setState(prevSate => ({
      appointmentsList: prevSate.appointmentsList.map(eachItem =>
        id === eachItem.id
          ? {...eachItem, isStarred: !eachItem.isStarred}
          : eachItem,
      ),
    }))
  }

  renderAppointmentItem = () => {
    const {appointmentsList, isStar} = this.state

    const app = isStar
      ? appointmentsList.filter(eachItem => eachItem.isStarred)
      : appointmentsList
    return app.map(eachItem => (
      <AppointmentItem
        itemDetails={eachItem}
        key={eachItem.id}
        onClickStar={this.onClickStar}
      />
    ))
  }

  render() {
    const {titleInput, dateInput, isStarred} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <div className="card">
            <div className="app-conatiner">
              <h1 className="main-heading">Add Appointment</h1>
              <form className="form" onSubmit={this.addAppointment}>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  className="title"
                  placeholder="TITLE"
                  id="title"
                  onChange={this.onClickTitle}
                  value={titleInput}
                />
                <label htmlFor="date" className="label">
                  DATE
                </label>
                <input
                  type="date"
                  className="date"
                  placeholder="DATE"
                  value={dateInput}
                  id="date"
                  onChange={this.onClickDate}
                />
                <button type="submit" className="btn-add">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="app-logo"
            />
          </div>
          <hr className="horizontal-line" />
          <div className="head-container">
            <h1 className="main-heading">Appointments</h1>
            <button
              className={`btn-star ${isStarred ? 'active' : ''}`}
              onClick={this.onClickStarred}
            >
              Starred
            </button>
          </div>
          <div className="app-list">
            <ul className="unorder-list">{this.renderAppointmentItem()}</ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
