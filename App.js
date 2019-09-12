import React, { Component } from 'react'
import { View } from 'react-native'
import Notes from './src/Container/Notes/'
import { Provider } from 'react-redux'
import Store from './src/Store'

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Notes/>
      </Provider>
    )
  }
}
