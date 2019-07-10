import React from 'react'
import './Thumb.css'
import { useFullScreen } from './fullScreenHook'

export default function FullScreenFunction ({caption, noRef}) {
  const { ref, toggle, fullScreen } = useFullScreen()

  return <button ref={noRef ? null : ref} onClick={toggle} className='Thumb'>
    {caption} : { fullScreen ? 'Opened' : 'Closed' }
  </button>
}
