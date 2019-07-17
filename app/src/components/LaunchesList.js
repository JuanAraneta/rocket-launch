import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import Launch from './Launch'

const style = {
  margin: 'auto',
  widrth: '100%',
  padding: '10px'
}

function mapStateToProps(state) {
  return {
    launches: state.launches
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

class LaunchesList extends Component {
  render() {
    return (
      <List dense style={style}>
        {
          this.props.launches.map(launch => {
            return (
              <Launch key={launch.flight_number} value={launch} />
            )
          })
        }
      </List>
    )
  }
}

export default connect(
  mapStateToProps,
)(LaunchesList)