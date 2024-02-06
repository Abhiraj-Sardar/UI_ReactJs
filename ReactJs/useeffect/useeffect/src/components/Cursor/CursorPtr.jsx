import React,{useState} from 'react'
import PtrEvent from './PtrEvent';
const CursorPtr = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    PtrEvent('pointermove', (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      });

  return (
   
    <div className="ptr" style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition:"0s",
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }}>
        
    </div>
  )
}

export default CursorPtr
