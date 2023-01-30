import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderInitialView = () => (
    <div className="initial-view-container">
      <h1 className="initial-view-container-heading">
        Click on an event, to view its registration details
      </h1>
    </div>
  )

  renderActiveEventContainer = () => {
    const {status, statusConstants} = this.props
    switch (status) {
      case statusConstants.yetToRegister:
        return this.renderYetToRegisterView()
      case statusConstants.registered:
        return this.renderRegisteredView()
      case statusConstants.registrationsClosed:
        return this.renderRegistrationClosedView()
      case statusConstants.initial:
        return this.renderInitialView()
      default:
        return null
    }
  }

  render() {
    const {activeEventId} = this.props
    return (
      <div className="active-event-registration-details-container">
        {this.renderActiveEventContainer()}
      </div>
    )
  }
}

export default ActiveEventRegistrationDetails
