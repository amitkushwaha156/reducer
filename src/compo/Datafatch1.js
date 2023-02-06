import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Datafatch1() {
 
 const [loading, setloading] = useState(true)
const [error, seterror] = useState("")
const [post, setpost] = useState({})
   
useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        setpost(res.data)
        setloading(false)
        seterror("")
      })
      .catch(error => {
        seterror(false)
         setloading(false)
         setpost({})
         seterror("went wrong")
      })
},[])

return (
    <div>

    { loading ? 'Loading' : post.title}
    {error ? 'error' : null}


    </div>
  )
}

export default Datafatch1