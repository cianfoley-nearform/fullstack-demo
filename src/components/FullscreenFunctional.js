import React from 'react'
import './Thumb.css'
import { useFullScreen } from '../custom_hooks/fullScreenHook'

export default function FullScreenButton ({caption, app}) {
  const { ref, toggle, fullScreen } = useFullScreen()
  
  return <button ref={app ? null : ref} className='Thumb' onClick={toggle}>
    {caption} {fullScreen ? '😮' : '😐' }
  </button>
}
