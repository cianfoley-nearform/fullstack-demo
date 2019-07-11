import { useState } from 'react'

function useDrag (options) {
  const { type, data } = options
  const [dragging, setDragging] = useState(null)

  function onDragStart (e) {
    e.dataTransfer.setData(type, data)
    setDragging('true')
  }

  function onDragEnd () {
    setDragging(null)
  }

  return { draggable: true, onDragStart, onDragEnd, dragging, type, data }
}

function useDrop (options) {
  const { type } = options
  const [over, setOver] = useState(null)
  const [data, setData] = useState(options.data)

  function onDragOver (e) {
    e.preventDefault()
    setOver('true')
  }

  function onDragLeave () { 
    setOver(null) 
  }

  function onDrop (e) { 
    setData(e.dataTransfer.getData(type))
    setOver(null) 
  }

  return { onDragOver, onDragLeave, onDrop, over, type, data }
}

export {
  useDrag,
  useDrop
}
