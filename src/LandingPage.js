import React, { useState }from 'react'


 const LandingPage = () => {

    let [count, setCount] = useState(0)

    return(
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={ ()=> setCount(count + 1)}>+</button>
            <button onClick={ ()=> setCount(count - 1)}>-</button>
            <button onClick={ ()=> setCount(0)}>Reset</button>



        </div>
    )

}

export default LandingPage