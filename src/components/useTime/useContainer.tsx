import { useState } from "react"

const useContainer = (): TimeContext => {
  const [state, setState] = useState(new Date());

  return [state, setState];
}

export default useContainer