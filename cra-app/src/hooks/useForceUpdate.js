import React, { useState } from 'react'

export function useForceUpdate() {
    const [_,forceUpdate] = useState(false)

  return ()=>{
    forceUpdate(prev=>!prev)
  }
}

