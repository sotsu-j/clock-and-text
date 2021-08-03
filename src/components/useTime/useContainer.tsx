import { useState } from "react"

const useContainer = (): TimeContext => {
  const [state, setState] = useState((new Date()).getTime());

  return [state, setState];
}

export default useContainer