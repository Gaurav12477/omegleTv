import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const Room = () => {
  const [searchParams,setSearchParams] = useSearchParams("");
  const name = searchParams.get('name');
  
  useEffect(()=>{
    //logic to init user to the
  }, [name]);
  
    return (
    <div>
        HI {name}
    </div>
  )
}

export default Room