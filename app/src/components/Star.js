import React, { Component } from 'react'
import * as animationData from '../assets/animations/animation.json'
import Lottie from 'react-lottie'

const Star = (props) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData.default,
    rendererSetting: {
      preserveAspectRadio: 'xMidYMid slice'
    }
  }

  return (
    <Lottie 
      options = {defaultOptions}
      height = {50}
      width = {50}
      stop = {props.stop}
    />
  )
}

export default Star