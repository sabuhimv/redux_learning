import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const OtherCounter = () => {
    const {counter} = useSelector(state => state.counter)


  return (
    <div>
            <h1>{counter}</h1>
        
    </div>
  )
}

export default OtherCounter