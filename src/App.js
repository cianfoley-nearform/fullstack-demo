import React, { useState } from 'react';
import FullScreenFunction  from './FullscreenFunction';
import FullScreenClass  from './FullscreenClass';
import { useFullScreen } from './fullScreenHook';
import FullScreenContext from './Context'
import FullScreenConsumer from './Consumer'

export default function App () {
  const [numItems, setNumItems] = useState(1);
  const [items, setItems] = useState([]);
  const fs = useFullScreen();

  function addItems () {
    let newItems = [...items, ...new Array(parseInt(numItems))]
    setItems(newItems)
  }

  function removeItems () { setItems([]) }
  function handleChange(e) { setNumItems(e.target.value) }

  return (
    <FullScreenContext.Provider value={fs}>
      <FullScreenConsumer />
      <div style={{padding: '20px'}}>
        
        <h1>Fullscreen Demo</h1>

        <h2>Class Component</h2>
        <FullScreenClass caption={'Class Instance'} />
        <FullScreenClass caption={'Class Instance (no ref)'} noRef />
        
        <h2>Functional Component</h2>
        <FullScreenFunction caption={'Functional Instance'} />
        <FullScreenFunction caption={'Functional Instance (no ref)'} noRef />

        <h2>Heap Snapshot Test</h2>
        <input type='text' onChange={handleChange} value={numItems} />
        <button onClick={addItems}>Add elements</button>
        <button onClick={removeItems}>Remove items</button>
        <div>
          {items.map((item, i) => <FullScreenClass key={i} caption={i+1} />)}
        </div>

      </div>
    </FullScreenContext.Provider>
  );
}

