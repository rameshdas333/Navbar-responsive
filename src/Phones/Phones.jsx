import { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner'

const Phones = () => {

    const [phones,setphones] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(() =>{
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => setphones(data.data))
     },[])

    return (
        <div>


 { loading &&  <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>}
            <h2 className="text-5xl">phones:{phones.length}</h2>
        </div>
    );
};

export default Phones;