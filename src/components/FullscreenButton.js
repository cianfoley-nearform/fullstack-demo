import React from 'react'
import { useFullScreen } from '../custom_hooks/fullScreenHook'

export default function FullScreenButton () {
  const { toggle, fullScreen } = useFullScreen()
  
  return <button onClick={toggle}>{ fullScreen ? 'Close' : 'Open' }</button>
}
