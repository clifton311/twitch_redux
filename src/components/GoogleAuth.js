import React, { Component } from 'react'

export default class GoogleAuth extends Component {

  state = {
    isSignedIn: null
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '180329943286-p0ls8f1kucrnc0bfge9n4vflu5nt9mma.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
      })
    })
  }

  renderAuthButton() {
    if(this.state.isSignedIn === false) {
      return <div>I don't know if we are signed in</div>
    } else if (this.state.isSignedIn) {
      return <div>I am signed In</div>
    } else {
      return <div>nOpe, not signed in</div>
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}
