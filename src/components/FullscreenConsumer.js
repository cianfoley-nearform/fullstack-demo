import React, { useContext } from 'react'

import FullScreenContext from '../Context'

export default function Consumer () {
  const {fullScreen, toggle} = useContext(FullScreenContext)
  
  return (
    <div style={{ fontSize: '140px', position: 'fixed', top: '20px', right: '20px'}}>
      {<div onClick={toggle}>{fullScreen ? '😮' : '😐'}</div>}
    </div>
  )
}
