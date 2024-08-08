// import React, { useState } from 'react'
// import axios from 'axios';
// const Axiospost = () => {
//     const data={
//         fname:" ",
//         lname:" "
//     };
// const [inputData,setInputdata]=useState(data);
// const handleData=(e)=>{
// setInputdata({...inputData,[e.target.name]:e.target.value})
// }
// const handleSubmit=(e)=>{
// e.preventDefault();
// //apne input data ko send karna
// axios.post('https://jsonplaceholder.typicode.com/users',inputData)
// .then((response)=>{
//     console.log(response);
// })
// const handleUpdate=()=>{
// e.preventDefault();
// }
// axios.put('https://jsonplaceholder.typicode.com/users/1',inputData)
// .then((response)=>{
//     console.log(response);
// })
// }
//   return (
//   <>
//   <label>FirstName</label>
//   <input type='text' name='fname' placeholder='firstname' value={inputData.fname} onChange={handleData}/>
//   <label>LastName</label>
//   <input type='text' name='lname' placeholder='lastname' value={inputData.lname} onChange={handleData}/>
//   <button onClick={handleSubmit}>Submit</button>
//   <button onClick={handleUpdate}>update</button>
//   </>
//   )
// }

// export default Axiospost

import React, { useState } from 'react';
import axios from 'axios';

const Axiospost = () => {
  const initialData = {
    fname: "",
    lname: ""
  };

  const [inputData, setInputData] = useState(initialData);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the input data via POST request
    axios.post('https://jsonplaceholder.typicode.com/users', inputData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Send the input data via PUT request
    axios.put('https://jsonplaceholder.typicode.com/users/1', inputData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    // Send the input data via PUT request
    axios.delete('https://jsonplaceholder.typicode.com/users/1', inputData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };
  return (
    <>
      <label>FirstName</label>
      <input 
        type='text' 
        name='fname' 
        placeholder='First Name' 
        value={inputData.fname} 
        onChange={handleData} 
      />
      <label>LastName</label>
      <input 
        type='text' 
        name='lname' 
        placeholder='Last Name' 
        value={inputData.lname} 
        onChange={handleData} 
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>delete</button>
    </>
  );
};

export default Axiospost;
