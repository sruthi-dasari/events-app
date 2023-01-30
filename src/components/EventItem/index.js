import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  onClickEvent = () => {
    const {updateActiveEvent, eventDetails} = this.props
    const {id} = eventDetails
    updateActiveEvent(id)
  }

  render() {
    const {eventDetails} = this.props
    const {imageUrl, name, location} = eventDetails
    return (
      <li className="list-item-container">
        <button type="button" onClick={this.onClickEvent} className="event-btn">
          <img src={imageUrl} alt="event" className="event-image" />
        </button>

        <h1 className="event-name">{name}</h1>
        <p className="event-location">{location}</p>
      </li>
    )
  }
}

export default EventItem
