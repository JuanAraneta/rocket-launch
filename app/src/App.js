import React, { Component } from 'react'
import { connect } from 'react-redux'
import LaunchesList from './components/LaunchesList'

function mapDispatchToProps(dispatch) {
  return {
    loadLaunches: () => {dispatch({type:'LOAD_LAUNCHES'})}
  }
}

class App extends Component {

  componentDidMount() {
    this.props.loadLaunches()
  }

  render() {
    return (
      <div>
        <LaunchesList/>
      </div>
    )
  }
}

export default connect(
  null,mapDispatchToProps
)(App)