import React, { useEffect } from 'react'
import { useDrag, useDrop } from '../custom_hooks/dragNdrop'
import JSONPretty from 'react-json-prettify'

export default function DragNDrop () {
    const sad = useDrag({ type: 'text', data: '😞'  })
    const ok = useDrag({ type: 'text', data: '😐'  })
    const happy = useDrag({ type: 'text', data: '😃'  })
    const angry = useDrag({ type: 'text', data: '😡'  })
    
    const q1 = useDrop({ type: 'text', data: null })
    const q2 = useDrop({ type: 'text', data: null })
    const q3 = useDrop({ type: 'text', data: null })
    
    useEffect(()=>{
        // post results to a server or whatever...
        q1.data && q2.data && q3.data && console.log('Send Results:', [q1.data, q2.data, q3.data])
    }, [q1.data, q2.data, q3.data])

    return ( 
      <>
        <div style={{fontSize: '24px'}}>
          <span {...sad}>{sad.data} </span>
          <span {...ok}>{ok.data} </span>
          <span {...happy}>{happy.data} </span>
          <span {...angry}>{angry.data} </span>
          <span>(<em>hint: drag emojis to boxes...</em>)</span>

          <ul>
            <li {...q1} style={q1.over ? { color: 'yellow' } : null}>
              How are you today? {q1.data || '🗅'}
            </li>
            <li {...q2} style={q2.over ? { color: 'yellow' } : null}>
              Do you like React Browser Hooks? {q2.data || '🗅'}
            </li>
            <li {...q3} style={q3.over ? { color: 'yellow' } : null}>
              How about this demo??? {q3.data || '🗅'}
            </li>
          </ul>

          {q1.data && q2.data && q3.data && '🤘FullStack London Rocks 🤘 Tanx a mill 🙏🙏🙏'}
        </div> 
        <JSONPretty json={{ sad }} />
        <JSONPretty json={{ q1 }} />
      </>
    )
  }
  
  
  