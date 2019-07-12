import React, { useEffect } from 'react'
import { useDrag, useDrop } from '../custom_hooks/dragNdrop'
import JSONPretty from 'react-json-prettify'

export default function DragNDrop () {
    const sad = useDrag({ type: 'text', data: '😞'  })
    const ok = useDrag({ type: 'text', data: '😐'  })
    const happy = useDrag({ type: 'text', data: '😃'  })
    const angry = useDrag({ type: 'text', data: '😡'  })
    
    const q1 = useDrop({ type: 'text' })
    const q2 = useDrop({ type: 'text' })
    const q3 = useDrop({ type: 'text' })
    
    useEffect(()=>{
        // post results to a server or whatever...
        q1.data && q2.data && q3.data && 
        console.log('Send Results:', [q1.data, q2.data, q3.data])
    }, [q1.data, q2.data, q3.data])

    return ( 
      <>
        <div style={{fontSize: '24px'}}>

          <span {...sad}> {sad.data} </span>
          <span {...ok}> {ok.data} </span>
          <span {...happy}> {happy.data} </span>
          <span {...angry}> {angry.data} </span>
          <span>(<em>hint: drag emojis to boxes...</em>)</span>

          <ul>
            <li {...q1} style={q1.over ? { color: 'yellow' } : null}>
              How are you feeling? {q1.data || '🗅'}
            </li>
            <li {...q2} style={q2.over ? { color: 'yellow' } : null}>
              What do you think of react browser hooks? {q2.data || '🗅'}
            </li>
            <li {...q3} style={q3.over ? { color: 'yellow' } : null}>
              How about FullStack London 2019? {q3.data || '🗅'}
            </li>
          </ul>

          <h1>
            {q1.data && q2.data && q3.data && '🤘FullStack London Rocks 🤘 Tanx a mill 🙏🙏🙏'}
          </h1>

        </div> 
        <JSONPretty json={{ 
            sad: sad.dragging ? 'dragging' : null, 
            ok: ok.dragging ? 'dragging' : null,  
            happy: happy.dragging ? 'dragging' : null,  
            angry: angry.dragging ? 'dragging' : null, 
            q1: `${q1.over ? 'over' : q1.data}`,
            q2: `${q2.over ? 'over' : q2.data}`,
            q3: `${q3.over ? 'over' : q3.data}`
        }} />
      </>
    )
  }
  
  
  