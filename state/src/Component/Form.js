import React,{useState} from "react";

const Form = () => {
    let [name,setName]= useState("")
    let [modifiedName, setModifiedName] = useState("")


 function formSubmit(e){
               e.preventDefault()
               setModifiedName(name.toUpperCase())
            //    e.target.value = ""
           }
    
           function reset(){
                setName("")
                setModifiedName("")
           }
        //   setName("")
    




return (
    <div>
        <form onSubmit={formSubmit}>
         <input type="text" 
                placeholder="Enter your name"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                /> 
                <button>Submit</button>
            </form>
           { modifiedName &&
             <p>Modified Name: {modifiedName}</p>
           }
           <button onClick={reset}> Reset </button>
    </div>
)
        }

export default Form