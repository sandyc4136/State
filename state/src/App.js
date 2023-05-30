import React, {useState} from 'react';
import Counter from "./Component/Counter";
import Form from "./Component/Form";

const App = () => {

//   let [coins,setCoins]= useState(100);
//   // useState is heling to not reassigning  the value again and again  or reloading the component
//   // [] is an array which has two parameters
//     let a=10

//     function increaseA(){
//       a++;
//     }

//     function increaseCoins(){
//       setCoins(coins+1);
//     }

  return (
    <div>
          {/* <h1>{a}</h1>
          <button onClick={increaseA}> change A </button>
          <h1>{coins}</h1>
          <button onClick={increaseCoins}> change Coins </button> */}
          {/* <Counter/> */}
          <Form/>
    </div>
  
  )
}



export default App