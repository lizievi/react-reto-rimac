import { useState } from "react";

const useToggleParagraph = (value=true) => {
  const [isDown, setIsDown] = useState(value)

  const toggleDown = () => {
    setIsDown(!isDown)
  }

  return [isDown, toggleDown];
}

export default useToggleParagraph
