import { useState } from "react"

const useMountEdit = (min, max) => {

  const[mount, setMount] = useState(min)

  const MountIncrease = () => {
    if((mount+100) <= max){
      setMount(mount + 100) 
    }else{mount}
    return mount
  }

  const MountDecrease = () => {
    if((mount-100) < min){
      mount
    }else{setMount(mount - 100)}
    return mount
  }

  return {
    mount,
    MountIncrease,
    MountDecrease
  }
}

export default useMountEdit


