import React from 'react'
import { useDrag, useDrop } from '../custom_hooks/dragNdrop'

export default function DragNDrop () {
    const drag = useDrag({ type: 'text', data: 'Drag Me!!!'  })
    const drop = useDrop({ type: 'text', data: 'Drop Here...' })
  
    return ( 
      <>
        <div {...drag}>{drag.data}</div>
        <div {...drop}>{drop.data}</div>
      </> 
    )
  }
  