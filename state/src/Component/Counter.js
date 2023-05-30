import React, {useState} from 'react'


const Counter = () =>{ 

    let [count,setCount] = useState(1)

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={()=>setCount(count+1)}> Increase </button>

            <button onClick={()=>setCount(count-1)}> Decrease </button>

            <button onClick={()=>setCount(1)}> Reset </button>
        </div>
    )

}

export default Counter

