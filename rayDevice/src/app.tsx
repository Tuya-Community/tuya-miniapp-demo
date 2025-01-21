import React from 'react'
export default class App extends React.Component {
  onLaunch(options) {
    console.log('App.onLaunch', options)
  }
  render() {
    return this.props.children
  }
}
