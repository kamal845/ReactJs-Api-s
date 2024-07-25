import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line react-hooks/rules-of-hooks
const axiosTutorial = () => {

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
    console.log(response);
})
    },[])
  return (
    <div>axiosTutorial</div>
  )
}

export default axiosTutorial