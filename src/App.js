import React, { useState } from 'react';
import FullScreenButton  from './components/FullscreenButton';
import FullScreenImage  from './components/FullscreenImage';
import FullScreenClass  from './components/FullscreenClass';
import FullScreenFunctional  from './components/FullscreenFunctional';
import { useFullScreen } from './custom_hooks/fullScreenHook';
import FullScreenContext from './Context'
import FullScreenConsumer from './components/FullscreenConsumer'
import DragNDrop from './components/DragNDrop'
import fullStack from './fsparty.png'

export default function App () {
  const fs = useFullScreen();
  const [numItems, setNumItems] = useState(1);
  const [items, setItems] = useState([]);

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
        <FullScreenClass caption='FullScreen Me' />
        <FullScreenClass caption='FullScreen App' app/>
        
        <h2>Hooks Functional Examples</h2>
        <FullScreenButton />
        <FullScreenImage src={fullStack} alt='' />
        <FullScreenFunctional caption='FullScreen Me' />
        <FullScreenFunctional caption='FullScreen App' app/>

        <h2>Heap Snapshot Test</h2>
        <input type='text' onChange={handleChange} value={numItems} />
        <button onClick={addItems}>Add Items</button>
        <button onClick={removeItems}>🗑</button>
        <div>
          {items.map((item, i) => <FullScreenClass key={i} caption={i+1} />)}
        </div>

        <h1 style={{marginTop: '100px'}}>DragNDrop Hooks</h1>
        <DragNDrop/>
      </div>
    </FullScreenContext.Provider>
  );
}

