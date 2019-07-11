import React from 'react'
import { useFullScreen } from '../custom_hooks/fullScreenHook'

export default function FullScreenImage ({src, alt}) {
  const { ref, toggle, fullScreen } = useFullScreen()

  return <img ref={ref} onClick={toggle} src={src} alt={alt} 
    style={fullScreen ? null : { width: '100px' }}/>
}
