import React from 'react'
import { initPanelEnvironment } from '@ray-js/ray'
initPanelEnvironment({ useDefaultOffline: false })
export default class App extends React.Component {
  render() {
    return this.props.children
  }
}
