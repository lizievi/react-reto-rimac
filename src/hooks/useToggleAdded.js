import { useState } from "react";

const useToggleAdded= (value = true) => {
  const [isAdded, setIsAdded] = useState(value)

  const toggleAdded = () => {
    setIsAdded(!isAdded)
  }

  return [isAdded, toggleAdded];
}

export default useToggleAdded

