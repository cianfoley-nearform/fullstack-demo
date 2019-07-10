import React, { createRef } from 'react'
import './Thumb.css'

class FullScreenClass extends React.Component {
 // 1 reference and state
 constructor(props) {
   super(props)
   this.ref = props.noRef ? null : createRef()

   this.state = {
     fullScreen: this.isFullScreen() 
   }
 }

 // 2. nuanced already
 isFullScreen = () => {
  const { ref } = this

  if(ref && ref.current) {
    return Boolean(
      document.fullscreenElement === ref.current ||
      document.mozFullScreenElement === ref.current ||
      document.webkitFullscreenElement === ref.current ||
      document.msFullscreenElement === ref.current
    )
  }

  return Boolean(
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement ||
    document.fullscreen ||
    document.mozFullScreen ||
    document.webkitIsFullScreen ||
    document.fullScreenMode
  )
 }

 // 5. register the events
 componentDidMount() {
  document.addEventListener('webkitfullscreenchange', this.handleFullscreenChange, false)
  document.addEventListener('mozfullscreenchange', this.handleFullscreenChange, false)
  document.addEventListener('msfullscreenchange', this.handleFullscreenChange, false)
  document.addEventListener('MSFullscreenChange', this.handleFullscreenChange, false) //IE11
  document.addEventListener('fullscreenchange', this.handleFullscreenChange, false)
}

 // 6. handle the change
 handleFullscreenChange = () => {
   const fullScreen = this.isFullScreen()

   this.setState ({fullScreen})
 }

 // 4 - request and exit, still not there
 handleToggle = (e) => {
   const el = (this.ref && this.ref.current) || document.documentElement
   if(!this.state.fullScreen) {
     if (el.requestFullscreen) {
       el.requestFullscreen()
     } else if (el.mozRequestFullScreen) {
       el.mozRequestFullScreen()
     } else if (el.webkitRequestFullscreen) {
       el.webkitRequestFullscreen()
     } else if (el.msRequestFullscreen) {
       el.msRequestFullscreen()
     }
   } else {
     if (document.exitFullscreen) {
       document.exitFullscreen()
     } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen()
     } else if (document.webkitExitFullscreen) {
       document.webkitExitFullscreen()
     } else if (document.msExitFullscreen) {
       document.msExitFullscreen()
     }
   }
 }

  // 3 render, note ref and use of state, then handle toggle
  render () { 
    return <button 
      ref={this.ref} 
      className={'Thumb'}
      onClick={this.handleToggle}>
      {this.props.caption} : { this.state.fullScreen ? 'Opened' : 'Closed' }
    </button>
  }

  // 8 cleanup
  componentWillUnmount() {
    document.removeEventListener('webkitfullscreenchange', this.handleFullscreenChange)
    document.removeEventListener('mozfullscreenchange', this.handleFullscreenChange)
    document.removeEventListener('msfullscreenchange', this.handleFullscreenChange)
    document.removeEventListener('MSFullscreenChange', this.handleFullscreenChange)
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange)
  }
}

export default FullScreenClass