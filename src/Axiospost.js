import React, { useState } from 'react'
import axios from 'axios';
const Axiospost = () => {
    const data={
        fname:" ",
        lname:" "
    };
const [inputData,setInputdata]=useState(data);
const handleData=(e)=>{
setInputdata({...inputData,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
e.preventDefault();
//apne input data ko send karna
axios.post('https://jsonplaceholder.typicode.com/users',inputData)
.then((response)=>{
    console.log(response);
})
}
  return (
  <>
  <label>FirstName</label>
  <input type='text' name='fname' placeholder='firstname' value={inputData.fname} onChange={handleData}/>
  <label>LastName</label>
  <input type='text' name='lname' placeholder='lastname' value={inputData.lname} onChange={handleData}/>
  <button onClick={handleSubmit}>Submit</button>
  </>
  )
}

export default Axiospost