import React, { useState } from 'react'
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Star from './Star';


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    favLaunch: (launchId, mode) => {dispatch({type:'FAV_LAUNCH', payload: {launchId, mode}})}
  }
}


const Launch = (props) => {

  const [stop, setStop] = useState(true)

  const clickHandler = () => {
    if (!stop) {
      setStop(true)
      props.favLaunch(props.value.flight_number, false)
    } else {
      setStop(false)
      props.favLaunch(props.value.flight_number, true)
    }
  }

  return (
    <ListItem key={props.value.flight_number}>
        <ListItemAvatar>
          <Avatar
            src={props.value.rocket.images[0]}
          />
        </ListItemAvatar>
        <ListItemText primary={props.value.mission_name} />
        <ListItemSecondaryAction onClick={clickHandler}>
          <Star stop={stop}></Star>
        </ListItemSecondaryAction>
      </ListItem>
  )
}


export default connect(
  mapStateToProps,mapDispatchToProps
)(Launch);