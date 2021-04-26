import { useState } from "react";
import './App.css';

function App() {
  
  const [value, setValue] = useState("Output")
  const [saved, setSaved]=useState("")
  function handleChange(event){
    console.log(event.target.value)
    setSaved(event.target.value)
   
  }
  function handleSubmit(event) {
    
    setValue(saved)
    event.preventDefault()
  }

  return (
    <div>
      <div class="m-8 flex justify-center" >
        <form onSubmit={handleSubmit}>

          <input class="p-2 bg-gray-100 focus:bg-white shadow border border-gray-600 
        focus:border-indigo-500 placeholder-gray-500 focus:placeholder-opacity-0 "
            type="text"
            placeholder="Enter Text"
            onChange={handleChange} 
          />


          <button type="Submit"  class="p-2 border border-indigo-500  border-opacity-50 hover:border-gray-500" >Submit</button>

        </form>

      </div>
      <div class="flex justify-center ">{value}</div>
    </div>
  );
}

export default App;
